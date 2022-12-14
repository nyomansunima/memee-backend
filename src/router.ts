import authController from './controllers/auth.ts'
import { Router } from './deps.ts'
import configuration from './config/configuration.ts'

// define the base url
// will be used in all of the api
const BASE_URL = configuration.api.baseUrl

/**
 * # router
 *
 * the routes for the application
 * api, and handle all request and response
 * with the controllers
 */
const router = new Router()

// add all of the routes
router.get(`${BASE_URL}/v1/auth`, authController.index)

export default router
