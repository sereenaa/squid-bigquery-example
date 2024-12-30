import fs from 'fs'
import {assertNotNull} from '@subsquid/util-internal'
import {BigQuery} from '@google-cloud/bigquery'
import {
	Column,
	Table,
	Types,
	Database
} from '@subsquid/bigquery-store'
import {createLogger} from '@subsquid/logger'
import * as L2PoolInstance from "./abi/L2PoolInstance";
import * as PoolConfiguratorInstance from "./abi/PoolConfiguratorInstance";
import {
  BASEV3_POOL_CONTRACT, 
  BASEV3_POOL_CONFIGURATOR_CONTRACT, 
  processor
} from './processor'

// Uncomment the section below and define a GAC_JSON_FILE secret when deploying to Subsquid Cloud
// See https://docs.subsquid.io/sdk/resources/persisting-data/bigquery/#deploying-to-subsquid-cloud
/*
assertNotNull(process.env.GAC_JSON_FILE, 'Please define GAC_JSON_FILE. See https://cloud.google.com/docs/authentication/application-default-credentials#GAC')
let logger = createLogger('creds')
logger.info('Attempting to write the credentials JSON')
fs.writeFileSync('google_application_credentials.json', process.env.GAC_JSON_FILE!)
logger.info('Wrote the creds')
*/

const projectId = assertNotNull(process.env.GOOGLE_PROJECT_ID, 'Please define the GOOGLE_PROJECT_ID env variable')
const datasetId = assertNotNull(process.env.GOOGLE_DATASET_ID, 'Please define the GOOGLE_DATASET_ID env variable')

const db = new Database({
	bq: new BigQuery({
		projectId,
		location: 'us-east1'
	}), // set GOOGLE_APPLICATION_CREDENTIALS at .env
	dataset: `${projectId}.${datasetId}`,
	tables: {
		MintedToTreasuryTable: new Table(
			'basev3_minted_to_treasury',
			{
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
		),
    ReserveInitializedTable: new Table(
      'basev3_reserve_initialized',
      {
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
    )
	}
})

processor.run(db, async (ctx) => {
	for (let block of ctx.blocks) {
		for (let log of block.logs) {
			if (log.address === BASEV3_POOL_CONTRACT && log.topics[0] === L2PoolInstance.events.MintedToTreasury.topic) {
        // console.log(log)
        ctx.store.MintedToTreasuryTable.insert({
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
        })
      }
      else if (log.address === BASEV3_POOL_CONFIGURATOR_CONTRACT && log.topics[0] === PoolConfiguratorInstance.events.ReserveInitialized.topic) {
        ctx.store.ReserveInitializedTable.insert({
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
        })
      }
    }
  }
})