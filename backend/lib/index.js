'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _conf = require('./conf');

var _conf2 = _interopRequireDefault(_conf);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = _conf2.default.get('port');
var HOST = _conf2.default.get('host');

_app2.default.listen(PORT, HOST, function () {
    _logger2.default.info('app started on ' + HOST + ':' + PORT);
});