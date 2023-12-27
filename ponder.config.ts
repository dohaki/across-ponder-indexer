import { createConfig } from "@ponder/core";
import { createPublicClient, http, zeroAddress } from "viem";

import { spokePoolAbi } from "./abis/spokePoolAbi";

const latestBlockMainnet = await createPublicClient({
  transport: http(process.env.PONDER_RPC_URL_1),
}).getBlock();
// const latestBlockBase = await createPublicClient({
//   transport: http(process.env.PONDER_RPC_URL_8453),
// }).getBlock();
const latestBlockOptimism = await createPublicClient({
  transport: http(process.env.PONDER_RPC_URL_10),
}).getBlock();
const latestBlockArbitrum = await createPublicClient({
  transport: http(process.env.PONDER_RPC_URL_42161),
}).getBlock();

export default createConfig({
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1),
    },
    // base: {
    //   chainId: 8453,
    //   transport: http(process.env.PONDER_RPC_URL_8453),
    // },
    optimism: {
      chainId: 10,
      transport: http(process.env.PONDER_RPC_URL_10),
    },
    arbitrum: {
      chainId: 42161,
      transport: http(process.env.PONDER_RPC_URL_42161),
    },
  },
  contracts: {
    spokePool: {
      abi: spokePoolAbi,
      network: {
        mainnet: {
          address: "0x5c7BCd6E7De5423a257D81B442095A1a6ced35C5",
          startBlock: Number(latestBlockMainnet.number) - 50,
        },
        // base: {
        //   address: "0x09aea4b2242abC8bb4BB78D537A67a245A7bEC64",
        //   startBlock: Number(latestBlockBase.number) - 50,
        // },
        optimism: {
          address: "0x6f26Bf09B1C792e3228e5467807a900A503c0281",
          startBlock: Number(latestBlockOptimism.number) - 50,
        },
        arbitrum: {
          address: "0xe35e9842fceaCA96570B734083f4a58e8F7C5f2A",
          startBlock: Number(latestBlockArbitrum.number) - 50,
        },
      },
    },
  },
});
