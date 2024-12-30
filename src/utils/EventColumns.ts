import {Column, Types} from '@subsquid/bigquery-store'

export const EventColumns = {
  block: Column(Types.Numeric(38,9)),
  blockTimestamp: Column(Types.Numeric(38,9)),
  txHash: Column(Types.String()),
  txIndex: Column(Types.Numeric(38,9)),
  logIndex: Column(Types.Numeric(38,9)),
  contractAddress: Column(Types.String()),
  topic0: Column(Types.String(), {nullable: true}),
  topic1: Column(Types.String(), {nullable: true}),
  topic2: Column(Types.String(), {nullable: true}),
  topic3: Column(Types.String(), {nullable: true}),
  data: Column(Types.String(), {nullable: true})
}