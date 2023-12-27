export const spokePoolAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "rootBundleId",
        type: "uint256",
      },
    ],
    name: "EmergencyDeleteRootBundle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "originToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "destinationChainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "EnabledDepositRoute",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amountToReturn",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "refundAmounts",
        type: "uint256[]",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "rootBundleId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "leafId",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "l2TokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "refundAddresses",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "ExecutedRelayerRefundRoot",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalFilledAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fillAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "repaymentChainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "originChainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "destinationChainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "int64",
        name: "relayerFeePct",
        type: "int64",
      },
      {
        indexed: false,
        internalType: "int64",
        name: "realizedLpFeePct",
        type: "int64",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "depositId",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "destinationToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "message",
            type: "bytes",
          },
          {
            internalType: "int64",
            name: "relayerFeePct",
            type: "int64",
          },
          {
            internalType: "bool",
            name: "isSlowRelay",
            type: "bool",
          },
          {
            internalType: "int256",
            name: "payoutAdjustmentPct",
            type: "int256",
          },
        ],
        indexed: false,
        internalType: "struct SpokePool.RelayExecutionInfo",
        name: "updatableRelayData",
        type: "tuple",
      },
    ],
    name: "FilledRelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "originChainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "destinationChainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "int64",
        name: "relayerFeePct",
        type: "int64",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "depositId",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "quoteTimestamp",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "originToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "FundsDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isPaused",
        type: "bool",
      },
    ],
    name: "PausedDeposits",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isPaused",
        type: "bool",
      },
    ],
    name: "PausedFills",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "refundToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "originChainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "destinationChainId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "int64",
        name: "realizedLpFeePct",
        type: "int64",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "depositId",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fillBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousIdenticalRequests",
        type: "uint256",
      },
    ],
    name: "RefundRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "rootBundleId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "relayerRefundRoot",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "slowRelayRoot",
        type: "bytes32",
      },
    ],
    name: "RelayedRootBundle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int64",
        name: "newRelayerFeePct",
        type: "int64",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "depositId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "updatedRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "updatedMessage",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "depositorSignature",
        type: "bytes",
      },
    ],
    name: "RequestedSpeedUpDeposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "newBuffer",
        type: "uint32",
      },
    ],
    name: "SetDepositQuoteTimeBuffer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newHubPool",
        type: "address",
      },
    ],
    name: "SetHubPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "SetXDomainAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amountToReturn",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "leafId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "l2TokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "TokensBridged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_TRANSFER_SIZE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SLOW_FILL_MAX_TOKENS_TO_SEND",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UPDATE_DEPOSIT_DETAILS_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_initialDepositId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_crossDomainAdmin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_hubPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wrappedNativeTokenAddress",
        type: "address",
      },
    ],
    name: "__SpokePool_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "chainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "crossDomainAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "originToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "destinationChainId",
        type: "uint256",
      },
      {
        internalType: "int64",
        name: "relayerFeePct",
        type: "int64",
      },
      {
        internalType: "uint32",
        name: "quoteTimestamp",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "depositCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositQuoteTimeBuffer",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rootBundleId",
        type: "uint256",
      },
    ],
    name: "emergencyDeleteRootBundle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "enabledDepositRoutes",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "rootBundleId",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amountToReturn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "refundAmounts",
            type: "uint256[]",
          },
          {
            internalType: "uint32",
            name: "leafId",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "l2TokenAddress",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "refundAddresses",
            type: "address[]",
          },
        ],
        internalType: "struct SpokePoolInterface.RelayerRefundLeaf",
        name: "relayerRefundLeaf",
        type: "tuple",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
    ],
    name: "executeRelayerRefundLeaf",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "destinationToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "originChainId",
        type: "uint256",
      },
      {
        internalType: "int64",
        name: "realizedLpFeePct",
        type: "int64",
      },
      {
        internalType: "int64",
        name: "relayerFeePct",
        type: "int64",
      },
      {
        internalType: "uint32",
        name: "depositId",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "rootBundleId",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "int256",
        name: "payoutAdjustment",
        type: "int256",
      },
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
    ],
    name: "executeSlowRelayLeaf",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "fillCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "destinationToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxTokensToSend",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "repaymentChainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "originChainId",
        type: "uint256",
      },
      {
        internalType: "int64",
        name: "realizedLpFeePct",
        type: "int64",
      },
      {
        internalType: "int64",
        name: "relayerFeePct",
        type: "int64",
      },
      {
        internalType: "uint32",
        name: "depositId",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256",
      },
    ],
    name: "fillRelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "updatedRecipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "destinationToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxTokensToSend",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "repaymentChainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "originChainId",
        type: "uint256",
      },
      {
        internalType: "int64",
        name: "realizedLpFeePct",
        type: "int64",
      },
      {
        internalType: "int64",
        name: "relayerFeePct",
        type: "int64",
      },
      {
        internalType: "int64",
        name: "updatedRelayerFeePct",
        type: "int64",
      },
      {
        internalType: "uint32",
        name: "depositId",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "updatedMessage",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "depositorSignature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256",
      },
    ],
    name: "fillRelayWithUpdatedDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hubPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_initialDepositId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_hubPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wethAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "numberOfDeposits",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "pause",
        type: "bool",
      },
    ],
    name: "pauseDeposits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "pause",
        type: "bool",
      },
    ],
    name: "pauseFills",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pausedDeposits",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pausedFills",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "refundsRequested",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "relayFills",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "relayerRefundRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "slowRelayRoot",
        type: "bytes32",
      },
    ],
    name: "relayRootBundle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "refundToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "originChainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "destinationChainId",
        type: "uint256",
      },
      {
        internalType: "int64",
        name: "realizedLpFeePct",
        type: "int64",
      },
      {
        internalType: "uint32",
        name: "depositId",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "fillBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxCount",
        type: "uint256",
      },
    ],
    name: "requestRefund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rootBundles",
    outputs: [
      {
        internalType: "bytes32",
        name: "slowRelayRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "relayerRefundRoot",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newCrossDomainAdmin",
        type: "address",
      },
    ],
    name: "setCrossDomainAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "newDepositQuoteTimeBuffer",
        type: "uint32",
      },
    ],
    name: "setDepositQuoteTimeBuffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "originToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "destinationChainId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setEnableRoute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newHubPool",
        type: "address",
      },
    ],
    name: "setHubPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "depositor",
        type: "address",
      },
      {
        internalType: "int64",
        name: "updatedRelayerFeePct",
        type: "int64",
      },
      {
        internalType: "uint32",
        name: "depositId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "updatedRecipient",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "updatedMessage",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "depositorSignature",
        type: "bytes",
      },
    ],
    name: "speedUpDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "wrappedNativeToken",
    outputs: [
      {
        internalType: "contract WETH9Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;
