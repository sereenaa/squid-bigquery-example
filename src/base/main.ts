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
import {EventColumns} from '../utils/EventColumns'
import {EventLogger} from '../utils/EventLogger'
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
			'basev3_minted_to_treasury', EventColumns
		),
    ReserveInitializedTable: new Table(
      'basev3_reserve_initialized', EventColumns
    )
	}
})

processor.run(db, async (ctx) => {
	for (let block of ctx.blocks) {
		for (let log of block.logs) {
			if (log.address === BASEV3_POOL_CONTRACT && log.topics[0] === L2PoolInstance.events.MintedToTreasury.topic) {
        // console.log(log)
        ctx.store.MintedToTreasuryTable.insert(
          EventLogger.createLogEntry(block, log)
        )
      }
      else if (log.address === BASEV3_POOL_CONFIGURATOR_CONTRACT && log.topics[0] === PoolConfiguratorInstance.events.ReserveInitialized.topic) {
        ctx.store.ReserveInitializedTable.insert(
          EventLogger.createLogEntry(block, log)
        )
      }
    }
  }
})