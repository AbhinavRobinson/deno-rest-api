/**
 * * Top Level: Server Startup
 *
 * ? Structure Description
 * @param Controllers: JS files that will handle the requests arriving,
 *                     the further calls to the services and below layers
 *                     and, finally, the delivery of the responses.
 *
 * @param db: SQL script of creation and the direct connection to the Postgres database.
 *
 * @param repositories: JS files will handle the management of the database operations.
 *
 * @param services: Files that will handle the business logic of the operations
 */

/**
 * ? Imports
 * @param Oak: A middleware framework for Deno’s net server.
 */
import { Application } from 'https://deno.land/x/oak/mod.ts'

/**
 * ? Local Imports
 * * Check About on ln.37
 */
import { APP_HOST, APP_PORT } from './config.js'
import { router } from './routes.js'
import _404 from './controllers/404.js'
import errorHandler from './controllers/errorHandler.js'

/**
 * ! Important
 * * App Initialization
 */
const app = new Application()

/**
 * ? About
 * @param errorHandler: Attach error handling to app.
 * @param router/routes: provides appropiate routes to required js function on call.
 * @param router/allowedMethods: Check validity of passed calls.
 * @param _404: default 404 handler.
 */
app.use(errorHandler)
app.use(router.routes())
app.use(router.allowedMethods())
app.use(_404)

/**
 * ? About
 * * logs server port recieved from ./config.js
 */
console.log(`Listening on port:${APP_PORT}...`)

/**
 * ! Server Startup
 * * Recieve Host/Ports from ./config.js
 */
await app.listen(`${APP_HOST}:${APP_PORT}`)
