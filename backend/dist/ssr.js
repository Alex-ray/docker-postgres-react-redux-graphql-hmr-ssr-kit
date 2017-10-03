'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderPage = exports.renderDevPage = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _createMemoryHistory = require('history/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _Html = require('./Html.js');

var _Html2 = _interopRequireDefault(_Html);

var _assets = require('./dist/assets.json');

var _assets2 = _interopRequireDefault(_assets);

var _store = require('./dist/store.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Redux


// Libraries
// Node Modules
function renderApp(url, res, store, assets) {
  var context = {};

  var html = (0, _server.renderToString)(_react2.default.createElement(_Html2.default, {
    title: '\uD83D\uDCA5',
    store: store,
    url: url,
    context: context,
    assets: assets }));

  res.send('<!DOCTYPE html>' + html);
}

// Components
var renderDevPage = exports.renderDevPage = function renderDevPage(req, res) {
  renderApp(req.url, res);
};

var renderPage = exports.renderPage = function renderPage(req, res) {
  var history = (0, _createMemoryHistory2.default)();
  var store = (0, _store2.default)(history);

  _assets2.default.manifest.text = _fs2.default.readFileSync((0, _path.join)(__dirname, 'dist', _assets2.default.manifest.js), 'utf-8');

  renderApp(req.url, res, store, _assets2.default);
};