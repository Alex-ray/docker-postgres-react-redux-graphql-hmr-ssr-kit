
import fsExtra from 'fs-extra';
import winston from 'winston';
import conf from './conf';

const loggers = {};


export function getLogger(name) {

    if (loggers[name]) {
        return loggers[name];
    }

    const transports = (conf.get('loggers')[name] || []).map(tconf => {
        const options = {
            ...tconf.options
        };

        //if logging to file, insert timestamp & make sure file exists
        if (options.filename) {
            options.filename = options.filename.replace('${time}', '_' +(new Date().toISOString()).substr(0, 19).replace('T', '_').replace(/\:/g, '-'));
            fsExtra.ensureFileSync(options.filename);
        }
        return new (winston.transports[tconf.transport])(options);
    });

    const logger = new (winston.Logger)({
        transports: transports
    });
    
    loggers[name] = logger;
    return logger;
}

export default getLogger('default');