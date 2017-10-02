import winston from 'winston';

// Silence the logs for test runs
winston.remove(winston.transports.Console);
