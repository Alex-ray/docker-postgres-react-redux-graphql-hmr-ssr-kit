'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _reactRouter = require('react-router');

var _server = require('react-dom/server');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries


// Redux


var PROD = process.env.NODE_ENV === 'production';

var Html = function (_Component) {
  _inherits(Html, _Component);

  function Html() {
    _classCallCheck(this, Html);

    return _possibleConstructorReturn(this, (Html.__proto__ || Object.getPrototypeOf(Html)).apply(this, arguments));
  }

  _createClass(Html, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          assets = _props.assets,
          store = _props.store,
          url = _props.url,
          context = _props.context;

      var _ref = assets || {},
          manifest = _ref.manifest,
          bundle = _ref.bundle,
          vendor = _ref.vendor,
          prerender = _ref.prerender;

      var state = PROD ? JSON.stringify(store.getState()) : JSON.stringify({});

      var initialState = 'window.__INITIAL_STATE__ = ' + state;
      var Layout = PROD ? require(_path2.default.join(__dirname, 'dist', 'prerender.js')) : function () {};

      var root = PROD && (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          _reactRouter.StaticRouter,
          { location: url, context: context },
          _react2.default.createElement(Layout, null)
        )
      ));

      return _react2.default.createElement(
        'html',
        null,
        _react2.default.createElement(
          'head',
          null,
          _react2.default.createElement('meta', { charSet: 'utf-8' }),
          _react2.default.createElement(
            'title',
            null,
            title
          ),
          PROD && _react2.default.createElement('link', { rel: 'stylesheet', href: 'http://localhost:3000/static/prerender.css', type: 'text/css' })
        ),
        _react2.default.createElement(
          'body',
          null,
          _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: initialState } }),
          PROD ? _react2.default.createElement('div', { id: 'mount', dangerouslySetInnerHTML: { __html: root } }) : _react2.default.createElement('div', { id: 'mount' }),
          PROD && _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: manifest.text } }),
          PROD && _react2.default.createElement('script', { src: vendor.js }),
          _react2.default.createElement('script', { src: PROD ? bundle.js : 'http://localhost:3000/static/bundle.js' })
        )
      );
    }
  }]);

  return Html;
}(_react.Component);

Html.propTypes = {
  url: _react.PropTypes.string.isRequired,
  title: _react.PropTypes.string.isRequired,
  store: _react.PropTypes.object,
  assets: _react.PropTypes.object
};
exports.default = Html;