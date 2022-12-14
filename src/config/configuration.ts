import { config } from '../deps.ts'

interface ConfigurationVars {
  port: number
  api: {
    baseUrl: string
  }
}

// define the env from loading
// file
const env: any = await config()

/**
 * # configuration
 *
 * define all configuration
 * including the environment and variables
 */
const configuration: ConfigurationVars = {
  port: env.PORT,
  api: {
    baseUrl: env.API_BASE_URL,
  },
}

export default configuration
