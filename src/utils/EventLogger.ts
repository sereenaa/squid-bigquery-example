interface EventLog {
  block: number
  blockTimestamp: number
  txHash: string
  txIndex: number
  logIndex: number
  contractAddress: string
  topic0: string | null
  topic1: string | null
  topic2: string | null
  topic3: string | null
  data: string | null
}

export class EventLogger {
  static createLogEntry(block: any, log: any): EventLog {
    return {
      block: block.header.height,
      blockTimestamp: block.header.timestamp / 1000,
      txHash: log.transactionHash,
      txIndex: log.transactionIndex,
      logIndex: log.logIndex,
      contractAddress: log.address,
      topic0: log.topics[0] || null,
      topic1: log.topics[1] || null,
      topic2: log.topics[2] || null,
      topic3: log.topics[3] || null,
      data: log.data || null,
    }
  }
}