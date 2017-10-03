'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getLogger = getLogger;

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _conf = require('./conf');

var _conf2 = _interopRequireDefault(_conf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggers = {};

function getLogger(name) {

    if (loggers[name]) {
        return loggers[name];
    }

    var transports = (_conf2.default.get('loggers')[name] || []).map(function (tconf) {
        var options = _extends({}, tconf.options);

        //if logging to file, insert timestamp & make sure file exists
        if (options.filename) {
            options.filename = options.filename.replace('${time}', '_' + new Date().toISOString().substr(0, 19).replace('T', '_').replace(/\:/g, '-'));
            _fsExtra2.default.ensureFileSync(options.filename);
        }
        return new _winston2.default.transports[tconf.transport](options);
    });

    var logger = new _winston2.default.Logger({
        transports: transports
    });

    loggers[name] = logger;
    return logger;
}

exports.default = getLogger('default');