'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _conf = require('./conf');

var _conf2 = _interopRequireDefault(_conf);

var _models = require('./models');

var _models2 = _interopRequireDefault(_models);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _ssr = require('./ssr.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PROD = process.env.NODE_ENV === 'production';

var PORT = _conf2.default.get('port');
var HOST = _conf2.default.get('host');

_logger2.default.info('initializing app with NODE_ENV=' + process.env.NODE_ENV);

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());

//used for tests
if (_conf2.default.get('serve_static_files')) {
  app.use('/static', _express2.default.static('/static'));
}

var render = PROD ? _ssr.renderPage : _ssr.renderDevPage;

app.use('/api', _api2.default);
app.get('*', render);

exports.default = app;