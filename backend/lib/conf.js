import nconf from 'nconf';
import path from 'path';
import fs from 'fs';

//default config
const defaultconfpath = path.join(process.cwd(), 'config', 'default.json');

//environment config
const confpath = path.join(process.cwd(), 'config', `${process.env.NODE_ENV}.json`);


//if config file for this env exists, load it then fill in defaults from default.json

let env_conf_exists = false;
try {
    fs.accessSync(confpath, fs.R_OK);
    env_conf_exists = true;
} catch (e) {

}

if (env_conf_exists) {
    nconf.file(confpath);
    nconf.defaults({
        type: 'file',
        file: defaultconfpath
    });

//else load default.json only
} else {
    console.warn(`config file not found for env ${process.env.NODE_ENV}`);
    nconf.file(defaultconfpath);
}

export default nconf;