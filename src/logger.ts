import { createLogger, format, transports } from 'winston';
const loggingFormat = format.combine(format.timestamp({format: "YYYY-MM-DD HH:mm:ss.SSSZ"}), format.json())
const logger = createLogger({
    level: 'info',
    format: loggingFormat,
    transports: [
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/info.log', level: 'info' }),
    ],
})

if (process.env.NODE_ENV !== 'production' && process.env.ENABLE_CONSOLE_LOGS === 'true') {
    logger.add(new transports.Console({
        format: loggingFormat,
    }));
}

export default logger