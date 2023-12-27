import { ponder } from "@/generated";
import { parseUnits } from "viem";

import { erc20Abi } from "../abis/erc20Abi";
import { fetchHistoricPrice } from "./utils/coingecko";

ponder.on("spokePool:FundsDeposited", async ({ event, context }) => {
  const { client, db, network } = context;
  const { User, Deposit, Token, Price } = db;

  // Create the user if it doesn't exist
  if (!(await User.findUnique({ id: event.args.depositor }))) {
    await User.create({
      id: event.args.depositor,
      data: {
        address: event.args.depositor,
      },
    });
  }

  // Create the token if it doesn't exist
  const tokenId = `${network.chainId}-${event.args.originToken}`;
  let token = await Token.findUnique({ id: tokenId });
  if (!token) {
    const erc20Contract = {
      abi: erc20Abi,
      address: event.args.originToken,
    } as const;
    const [name, symbol, decimals] = await client.multicall({
      contracts: [
        {
          ...erc20Contract,
          functionName: "name",
        },
        {
          ...erc20Contract,
          functionName: "symbol",
        },
        {
          ...erc20Contract,
          functionName: "decimals",
        },
      ],
      allowFailure: false,
    });

    token = await Token.create({
      id: tokenId,
      data: {
        chainId: network.chainId,
        address: event.args.originToken,
        name,
        symbol,
        decimals,
      },
    });
  }

  // Create the price if it doesn't exist
  const formattedISODate = new Date(Number(event.block.timestamp * 1000n))
    .toISOString()
    .slice(0, 10);
  const priceId = `${token.symbol}-${formattedISODate}`;
  if (!(await Price.findUnique({ id: priceId }))) {
    const usd = await fetchHistoricPrice(
      token.symbol,
      new Date(Number(event.block.timestamp * 1000n))
    );
    await Price.create({
      id: priceId,
      data: {
        formattedISODate,
        tokenId,
        usd: parseUnits(usd.toString(), 18),
      },
    });
  }

  // Create the deposit
  const depositId = `${event.args.originChainId}-${event.args.depositId}`;
  let deposit = await Deposit.findUnique({
    id: depositId,
  });
  if (!deposit) {
    await Deposit.create({
      id: depositId,
      data: {
        depositId: event.args.depositId,
        fromChain: context.network.chainId,
        toChain: Number(event.args.destinationChainId),
        txHash: event.transaction.hash,
        amount: event.args.amount,
        depositorId: event.args.depositor,
        recipientId: event.args.recipient,
        tokenId: tokenId,
        tokenPriceId: priceId,
        depositDate: Number(event.block.timestamp),
        status: "PENDING",
      },
    });
  }
});
