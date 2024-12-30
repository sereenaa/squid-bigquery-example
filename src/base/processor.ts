import { assertNotNull } from "@subsquid/util-internal";
import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
} from "@subsquid/evm-processor";

import * as L2PoolInstance from "./abi/L2PoolInstance";
import * as PoolConfiguratorInstance from "./abi/PoolConfiguratorInstance";
import * as DefaultReserveInterestRateStrategyV2 from "./abi/DefaultReserveInterestRateStrategyV2";

export const BASEV3_POOL_CONTRACT = '0xA238Dd80C259a72e81d7e4664a9801593F98d1c5'.toLowerCase()
export const BASEV3_POOL_CONFIGURATOR_CONTRACT = '0x5731a04B1E775f0fdd454Bf70f3335886e9A96be'.toLowerCase()
export const BASEV3_DEFAULT_RESERVE_INTEREST_RATE_STRATEGY_CONTRACT = '0x86AB1C62A8bf868E1b3E1ab87d587Aba6fbCbDC5'.toLowerCase()

export const processor = new EvmBatchProcessor()
  // Lookup archive by the network name in Subsquid registry
  // See https://docs.subsquid.io/evm-indexing/supported-networks/
  .setGateway("https://v2.archive.subsquid.io/network/base-mainnet")
  // Chain RPC endpoint is required for
  //  - indexing unfinalized blocks https://docs.subsquid.io/basics/unfinalized-blocks/
  //  - querying the contract state https://docs.subsquid.io/evm-indexing/query-state/
  // .setRpcEndpoint({
  //   // Set the URL via .env for local runs or via secrets when deploying to Subsquid Cloud
  //   // https://docs.subsquid.io/deploy-squid/env-variables/
  //   url: assertNotNull(process.env.RPC_ENDPOINT),
  //   // More RPC connection options at https://docs.subsquid.io/evm-indexing/configuration/initialization/#set-data-source
  //   rateLimit: 10,
  // })
  .setFinalityConfirmation(75)
  .setFields({
    log: {
      // Required fields are automatically included: logIndex, transactionIndex
      transactionHash: true
    },
    // trace: {
    //   createResultCode: true, // for checking ERC721 compliance
    //   createResultAddress: true,
    // },
  })
  .setBlockRange({
    from: 20858604, // 2024-10-09 start date of AAVE Base deployment
  })
  // .addTrace({
  //   type: ["create"],
  //   transaction: true,
  // })
  .addLog({
    address: [
      BASEV3_POOL_CONTRACT, 
      BASEV3_POOL_CONFIGURATOR_CONTRACT
    ],
    topic0: [
      L2PoolInstance.events.MintedToTreasury.topic, 
      PoolConfiguratorInstance.events.ReserveInitialized.topic
    ],
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;