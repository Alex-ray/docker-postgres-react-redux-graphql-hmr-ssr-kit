'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sequelize = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _conf = require('../conf');

var _conf2 = _interopRequireDefault(_conf);

var _logger = require('../logger');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dbconf = _conf2.default.get('database');
var sqllogger = (0, _logger.getLogger)('sql');

var sequelize = exports.sequelize = new _sequelize2.default(dbconf.database, dbconf.username, dbconf.password, _extends({}, dbconf, {
    logging: sqllogger.info.bind(sqllogger)
}));

var models = {};

//load models
_fs2.default.readdirSync(__dirname).filter(function (file) {
    return file !== 'index.js';
}).forEach(function (file) {
    var model = sequelize.import(_path2.default.join(__dirname, file));
    models[model.name] = model;
});

//create associations
Object.keys(models).forEach(function (name) {
    if ('associate' in models[name]) {
        models[name].associate(models);
    }
});

exports.default = models;