import { ponder } from "@/generated";
import { parseUnits, createPublicClient } from "viem";

import { erc20Abi } from "../abis/erc20Abi";
import { fetchHistoricPrice } from "./utils/coingecko";

ponder.on("spokePool:FilledRelay", async ({ event, context }) => {
  const { client, db, network } = context;
  const { User, Fill, Token, Price, TotalFill } = db;

  // Create the depositor if it doesn't exist
  if (!(await User.findUnique({ id: event.args.depositor }))) {
    await User.create({
      id: event.args.depositor,
      data: {
        address: event.args.depositor,
      },
    });
  }

  // Create the relayer if it doesn't exist
  if (!(await User.findUnique({ id: event.args.relayer }))) {
    await User.create({
      id: event.args.relayer,
      data: {
        address: event.args.relayer,
      },
    });
  }

  // Create the token if it doesn't exist
  const tokenId = `${network.chainId}-${event.args.destinationToken}`;
  let token = await Token.findUnique({ id: tokenId });
  if (!token) {
    const [name, symbol, decimals] = await Promise.all([
      client.readContract({
        abi: erc20Abi,
        address: event.args.destinationToken,
        functionName: "name",
      }),
      client.readContract({
        abi: erc20Abi,
        address: event.args.destinationToken,
        functionName: "symbol",
      }),
      client.readContract({
        abi: erc20Abi,
        address: event.args.destinationToken,
        functionName: "decimals",
      }),
    ]);

    token = await Token.create({
      id: tokenId,
      data: {
        chainId: network.chainId,
        address: event.args.destinationToken,
        symbol,
        decimals,
        name,
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

  // Get the fees

  // Create the fill
  const fill = await Fill.create({
    id: `${context.network.chainId}-${event.args.depositId}`,
    data: {
      depositId: `${event.args.originChainId}-${event.args.depositId}`,
      fillAmount: event.args.fillAmount,
      totalFilledAmount: event.args.totalFilledAmount,
      fillDate: Number(event.block.timestamp),
      txHash: event.transaction.hash,
      realizedLpFeePct: event.args.realizedLpFeePct,
      relayerFeePct: event.args.relayerFeePct,
      relayerId: event.args.relayer,
      tokenId,
      tokenPriceId: priceId,
    },
  });

  // Create total fill record
  if (event.args.amount === event.args.totalFilledAmount) {
    await TotalFill.create({
      id: fill.id,
      data: {
        ...fill,
      },
    });
  }
});
