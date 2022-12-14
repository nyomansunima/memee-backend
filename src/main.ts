import configuration from './config/configuration.ts'
import { Application, logger } from './deps.ts'
import router from './router.ts'

/**
 * create the application
 * and add some deps, including the routes
 */
const app = new Application()

// add the routes to the application
app.use(router.routes())
app.use(router.allowedMethods())

// check the application should running
// including add logger for error, success, and running
app.use(async (ctx, next) => {
  await next()
  logger.info(`${ctx.request.method} ${ctx.request.url}`)
})

app.addEventListener('listen', ({ hostname, port, secure }) => {
  logger.info(
    `🚀 Starting application at ${secure ? 'https' : 'http'}://${
      hostname ?? 'localhost'
    }:${port}`
  )
})

app.addEventListener('error', (e) => {
  logger.error(e.message)
})

// start the application
// with the specify port
await app.listen({ port: configuration.port })
