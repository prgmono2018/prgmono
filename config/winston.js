var appRoot = require('app-root-path');
var winston = require('winston');
const logDir = 'logs';
const { createLogger, format, transports } = require('winston');
const fs = require('fs');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
// define the custom settings for each transport (file, console)

const filename = path.join(logDir, 'results.log');
// instantiate a new Winston Logger with the settings defined above
/*var logger = winston.createLogger({
    transports: [
      new (winston.transports.Console)(options.console),
      new (winston.transports.File)(options.errorFile),
      new (winston.transports.File)(options.file)
    ],
    exitOnError: false, // do not exit on handled exceptions
  });*/

  const logger = createLogger({
    // change level if in dev environment versus production
    level: env === 'development' ? 'debug' : 'info',
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
     /// format.json()
    ),
    transports: [
      new transports.Console({
        level: 'debug',
        format: format.combine(
          format.colorize(),
          format.printf(
            info => `${info.timestamp} ${info.level}: ${info.message}`
          )
        )
      }),
      new transports.File({ filename })
    ]
  });
// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write: function(message, encoding) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  },
};

logger.info('Hello world');
logger.warn('Warning message');
logger.debug('Debugging info');
module.exports = logger;