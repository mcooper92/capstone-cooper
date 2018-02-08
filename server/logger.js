const bunyan = require('bunyan');
const config = require('./config/logger.js');


const logger = bunyan.createLogger(config);



module.exports = logger;