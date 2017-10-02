'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nconf = require('nconf');

var _nconf2 = _interopRequireDefault(_nconf);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//default config
var defaultconfpath = _path2.default.join(process.cwd(), 'config', 'default.json');

//environment config
var confpath = _path2.default.join(process.cwd(), 'config', process.env.NODE_ENV + '.json');

//if config file for this env exists, load it then fill in defaults from default.json

var env_conf_exists = false;
try {
    _fs2.default.accessSync(confpath, _fs2.default.R_OK);
    env_conf_exists = true;
} catch (e) {}

if (env_conf_exists) {
    _nconf2.default.file(confpath);
    _nconf2.default.defaults({
        type: 'file',
        file: defaultconfpath
    });

    //else load default.json only
} else {
    console.warn('config file not found for env ' + process.env.NODE_ENV);
    _nconf2.default.file(defaultconfpath);
}

exports.default = _nconf2.default;