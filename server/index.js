const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
//const requestId = require('./middleware/requestId.js');
//const logMiddleware = require('./middleware/log.js');
const logger = require('./logger.js');
const cors = require('kcors');
//const responseHandler = require('./middleware/responseHandler.js');
const router = require('./routes.js');
const config = require('./config');
const app = new Koa();


// set middleware
app.use(
  bodyParser({
    enableTypes: ['json', 'form'],
    formLimit: '10mb',
    jsonLimit: '10mb'
  })
);
//app.use(requestId());
app.use(logMiddleware({ logger }));
app.use(
  cors({
    origin: '*',
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH']
  })
);
//app.use(responseHandler());

// bootstrap application router
app.use(router.routes());
//app.use(router.allowedMethods());

// handle uncaught errors
app.on('error', err => {
  logger.error({ err, event: 'error' }, 'Unhandled exception occured');
});

// start server
if (!module.parent) {
  app.listen(config.port, config.host, () => {
    logger.info(`API server listening on ${config.host}:${config.port}, in ${config.env}`);
  });
}

// expose app
module.exports = app;