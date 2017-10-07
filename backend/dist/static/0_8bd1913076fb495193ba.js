webpackJsonp([0],{/***/
'./node_modules/css-loader/index.js?{"modules":true,"importLoaders":1,"localIdentName":"[name]_[local]_[hash:base64:5]"}!./node_modules/postcss-loader/index.js?{}!./universal/components/Home/Home.css':/***/
function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(),
// imports
// module
t.push([e.i,"\n.Home_home_3d18- {\n  max-width: 750px;\n}\n\n.Home_center_1OtD0 {\n  text-align: center;\n}\n\n.Home_title_oF0Zn {\n  color: white;\n  font-size: 3em;\n  display: block;\n  text-align: center;\n  width: 100%;\n}\n\n.Home_button_2iesV {\n  display: inline-block;\n  margin-top: 50px;\n  padding: 15px 40px;\n  font-size: 1.5em;\n  text-align: center;\n  color: #E4E7EB;\n  background-color: #F48F94;\n  border: solid 7px #F27D83;\n  border-radius: 100px;\n  text-decoration: none;\n  margin-top: 50px;\n\n}\n\n.Home_button_2iesV:hover {\n  border-color: #F48F94;\n}\n",""]),
// exports
t.locals={home:"Home_home_3d18-",center:"Home_center_1OtD0",title:"Home_title_oF0Zn",button:"Home_button_2iesV"}},/***/
"./node_modules/history/createHashHistory.js":/***/
function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},a=o("./node_modules/warning/browser.js"),s=r(a),i=o("./node_modules/invariant/browser.js"),u=r(i),c=o("./node_modules/history/LocationUtils.js"),l=o("./node_modules/history/PathUtils.js"),d=o("./node_modules/history/createTransitionManager.js"),f=r(d),p=o("./node_modules/history/DOMUtils.js"),h={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+(0,l.stripLeadingSlash)(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:l.stripLeadingSlash,decodePath:l.addLeadingSlash},slash:{encodePath:l.addLeadingSlash,decodePath:l.addLeadingSlash}},m=function(){
// We can't use window.location.hash here because it's not
// consistent across browsers - Firefox will pre-decode it!
var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)},y=function(e){return window.location.hash=e},v=function(e){var t=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,t>=0?t:0)+"#"+e)},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,u.default)(p.canUseDOM,"Hash history needs a DOM");var t=window.history,o=(0,p.supportsGoWithoutReloadUsingHash)(),r=e.getUserConfirmation,a=void 0===r?p.getConfirmation:r,i=e.hashType,d=void 0===i?"slash":i,_=e.basename?(0,l.stripTrailingSlash)((0,l.addLeadingSlash)(e.basename)):"",b=h[d],j=b.encodePath,w=b.decodePath,g=function(){var e=w(m());return(0,s.default)(!_||(0,l.hasBasename)(e,_),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+e+'" to begin with "'+_+'".'),_&&(e=(0,l.stripBasename)(e,_)),(0,c.createLocation)(e)},R=(0,f.default)(),O=function(e){n(W,e),W.length=t.length,R.notifyListeners(W.location,W.action)},P=!1,x=null,H=function(){var e=m(),t=j(e);if(e!==t)
// Ensure we always have a properly-encoded hash.
v(t);else{var o=g(),r=W.location;if(!P&&(0,c.locationsAreEqual)(r,o))return;// A hashchange doesn't always == location change.
if(x===(0,l.createPath)(o))return;// Ignore this change; we already setState in push/replace.
x=null,E(o)}},E=function(e){if(P)P=!1,O();else{R.confirmTransitionTo(e,"POP",a,function(t){t?O({action:"POP",location:e}):S(e)})}},S=function(e){var t=W.location,o=k.lastIndexOf((0,l.createPath)(t));-1===o&&(o=0);var r=k.lastIndexOf((0,l.createPath)(e));-1===r&&(r=0);var n=o-r;n&&(P=!0,U(n))},L=m(),C=j(L);L!==C&&v(C);var T=g(),k=[(0,l.createPath)(T)],N=function(e){return"#"+j(_+(0,l.createPath)(e))},M=function(e,t){(0,s.default)(void 0===t,"Hash history cannot push state; it is ignored");var o=(0,c.createLocation)(e,void 0,void 0,W.location);R.confirmTransitionTo(o,"PUSH",a,function(e){if(e){var t=(0,l.createPath)(o),r=j(_+t);if(m()!==r){
// We cannot tell if a hashchange was caused by a PUSH, so we'd
// rather setState here and ignore the hashchange. The caveat here
// is that other hash histories in the page will consider it a POP.
x=t,y(r);var n=k.lastIndexOf((0,l.createPath)(W.location)),a=k.slice(0,-1===n?0:n+1);a.push(t),k=a,O({action:"PUSH",location:o})}else(0,s.default)(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),O()}})},A=function(e,t){(0,s.default)(void 0===t,"Hash history cannot replace state; it is ignored");var o=(0,c.createLocation)(e,void 0,void 0,W.location);R.confirmTransitionTo(o,"REPLACE",a,function(e){if(e){var t=(0,l.createPath)(o),r=j(_+t);m()!==r&&(
// We cannot tell if a hashchange was caused by a REPLACE, so we'd
// rather setState here and ignore the hashchange. The caveat here
// is that other hash histories in the page will consider it a POP.
x=t,v(r));var n=k.indexOf((0,l.createPath)(W.location));-1!==n&&(k[n]=t),O({action:"REPLACE",location:o})}})},U=function(e){(0,s.default)(o,"Hash history go(n) causes a full page reload in this browser"),t.go(e)},B=function(){return U(-1)},F=function(){return U(1)},q=0,D=function(e){q+=e,1===q?(0,p.addEventListener)(window,"hashchange",H):0===q&&(0,p.removeEventListener)(window,"hashchange",H)},I=!1,K=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=R.setPrompt(e);return I||(D(1),I=!0),function(){return I&&(I=!1,D(-1)),t()}},V=function(e){var t=R.appendListener(e);return D(1),function(){D(-1),t()}},W={length:t.length,action:"POP",location:T,createHref:N,push:M,replace:A,go:U,goBack:B,goForward:F,block:K,listen:V};return W};t.default=_},/***/
"./node_modules/react-router-dom/es/BrowserRouter.js":/***/
function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}/* harmony import */
var s=o("./node_modules/warning/browser.js"),i=o.n(s),u=o("./node_modules/react/react.js"),c=o.n(u),l=o("./node_modules/prop-types/index.js"),d=o.n(l),f=o("./node_modules/history/createBrowserHistory.js"),p=o.n(f),h=o("./node_modules/react-router-dom/es/Router.js"),m=function(e){function t(){var o,a,s;r(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return o=a=n(this,e.call.apply(e,[this].concat(u))),a.history=p()(a.props),s=o,n(a,s)}return a(t,e),t.prototype.componentWillMount=function(){i()(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},t.prototype.render=function(){return c.a.createElement(h.a,{history:this.history,children:this.props.children})},t}(c.a.Component);m.propTypes={basename:d.a.string,forceRefresh:d.a.bool,getUserConfirmation:d.a.func,keyLength:d.a.number,children:d.a.node},/* harmony default export */
t.a=m},/***/
"./node_modules/react-router-dom/es/HashRouter.js":/***/
function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}/* harmony import */
var s=o("./node_modules/warning/browser.js"),i=o.n(s),u=o("./node_modules/react/react.js"),c=o.n(u),l=o("./node_modules/prop-types/index.js"),d=o.n(l),f=o("./node_modules/history/createHashHistory.js"),p=o.n(f),h=o("./node_modules/react-router-dom/es/Router.js"),m=function(e){function t(){var o,a,s;r(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return o=a=n(this,e.call.apply(e,[this].concat(u))),a.history=p()(a.props),s=o,n(a,s)}return a(t,e),t.prototype.componentWillMount=function(){i()(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")},t.prototype.render=function(){return c.a.createElement(h.a,{history:this.history,children:this.props.children})},t}(c.a.Component);m.propTypes={basename:d.a.string,getUserConfirmation:d.a.func,hashType:d.a.oneOf(["hashbang","noslash","slash"]),children:d.a.node},/* harmony default export */
t.a=m},/***/
"./node_modules/react-router-dom/es/Link.js":/***/
function(e,t,o){"use strict";function r(e,t){var o={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}/* harmony import */
var i=o("./node_modules/react/react.js"),u=o.n(i),c=o("./node_modules/prop-types/index.js"),l=o.n(c),d=o("./node_modules/invariant/browser.js"),f=o.n(d),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},h=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var o,r,s;n(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return o=r=a(this,e.call.apply(e,[this].concat(u))),r.handleClick=function(e){if(r.props.onClick&&r.props.onClick(e),!e.defaultPrevented&&// onClick prevented default
0===e.button&&// ignore right clicks
!r.props.target&&// let browser handle "target=_blank" etc.
!h(e)){e.preventDefault();var t=r.context.router.history,o=r.props,n=o.replace,a=o.to;n?t.replace(a):t.push(a)}},s=o,a(r,s)}return s(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),o=e.innerRef,n=r(e,["replace","to","innerRef"]);// eslint-disable-line no-unused-vars
f()(this.context.router,"You should not use <Link> outside a <Router>");var a=this.context.router.history.createHref("string"==typeof t?{pathname:t}:t);return u.a.createElement("a",p({},n,{onClick:this.handleClick,href:a,ref:o}))},t}(u.a.Component);m.propTypes={onClick:l.a.func,target:l.a.string,replace:l.a.bool,to:l.a.oneOfType([l.a.string,l.a.object]).isRequired,innerRef:l.a.oneOfType([l.a.string,l.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:l.a.shape({history:l.a.shape({push:l.a.func.isRequired,replace:l.a.func.isRequired,createHref:l.a.func.isRequired}).isRequired}).isRequired},/* harmony default export */
t.a=m},/***/
"./node_modules/react-router-dom/es/MemoryRouter.js":/***/
function(e,t,o){"use strict";/* harmony import */
var r=o("./node_modules/react-router/es/MemoryRouter.js");
// Written in this round about way for babel-transform-imports
/* harmony default export */
t.a=r.a},/***/
"./node_modules/react-router-dom/es/NavLink.js":/***/
function(e,t,o){"use strict";function r(e,t){var o={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o}/* harmony import */
var n=o("./node_modules/react/react.js"),a=o.n(n),s=o("./node_modules/prop-types/index.js"),i=o.n(s),u=o("./node_modules/react-router-dom/es/Route.js"),c=o("./node_modules/react-router-dom/es/Link.js"),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(e){var t=e.to,o=e.exact,n=e.strict,s=e.location,i=e.activeClassName,f=e.className,p=e.activeStyle,h=e.style,m=e.isActive,y=e.ariaCurrent,v=r(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","ariaCurrent"]);return a.a.createElement(u.a,{path:"object"===(void 0===t?"undefined":d(t))?t.pathname:t,exact:o,strict:n,location:s,children:function(e){var o=e.location,r=e.match,n=!!(m?m(r,o):r);return a.a.createElement(c.a,l({to:t,className:n?[f,i].filter(function(e){return e}).join(" "):f,style:n?l({},h,p):h,"aria-current":n&&y},v))}})};f.propTypes={to:c.a.propTypes.to,exact:i.a.bool,strict:i.a.bool,location:i.a.object,activeClassName:i.a.string,className:i.a.string,activeStyle:i.a.object,style:i.a.object,isActive:i.a.func,ariaCurrent:i.a.oneOf(["page","step","location","true"])},f.defaultProps={activeClassName:"active",ariaCurrent:"true"},/* harmony default export */
t.a=f},/***/
"./node_modules/react-router-dom/es/Prompt.js":/***/
function(e,t,o){"use strict";/* harmony import */
var r=o("./node_modules/react-router/es/Prompt.js");
// Written in this round about way for babel-transform-imports
/* harmony default export */
t.a=r.a},/***/
"./node_modules/react-router-dom/es/Redirect.js":/***/
function(e,t,o){"use strict";/* harmony import */
var r=o("./node_modules/react-router/es/Redirect.js");
// Written in this round about way for babel-transform-imports
/* harmony default export */
t.a=r.a},/***/
"./node_modules/react-router-dom/es/Route.js":/***/
function(e,t,o){"use strict";/* harmony import */
var r=o("./node_modules/react-router/es/Route.js");
// Written in this round about way for babel-transform-imports
/* harmony default export */
t.a=r.a},/***/
"./node_modules/react-router-dom/es/Router.js":/***/
function(e,t,o){"use strict";/* harmony import */
var r=o("./node_modules/react-router/es/Router.js");
// Written in this round about way for babel-transform-imports
/* harmony default export */
t.a=r.a},/***/
"./node_modules/react-router-dom/es/StaticRouter.js":/***/
function(e,t,o){"use strict";/* harmony import */
var r=o("./node_modules/react-router/es/StaticRouter.js");
// Written in this round about way for babel-transform-imports
/* harmony default export */
t.a=r.a},/***/
"./node_modules/react-router-dom/es/Switch.js":/***/
function(e,t,o){"use strict";/* harmony import */
var r=o("./node_modules/react-router/es/Switch.js");
// Written in this round about way for babel-transform-imports
/* harmony default export */
t.a=r.a},/***/
"./node_modules/react-router-dom/es/index.js":/***/
function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});/* harmony import */
var r=o("./node_modules/react-router-dom/es/BrowserRouter.js");/* harmony reexport (binding) */
o.d(t,"BrowserRouter",function(){return r.a});/* harmony import */
var n=o("./node_modules/react-router-dom/es/HashRouter.js");/* harmony reexport (binding) */
o.d(t,"HashRouter",function(){return n.a});/* harmony import */
var a=o("./node_modules/react-router-dom/es/Link.js");/* harmony reexport (binding) */
o.d(t,"Link",function(){return a.a});/* harmony import */
var s=o("./node_modules/react-router-dom/es/MemoryRouter.js");/* harmony reexport (binding) */
o.d(t,"MemoryRouter",function(){return s.a});/* harmony import */
var i=o("./node_modules/react-router-dom/es/NavLink.js");/* harmony reexport (binding) */
o.d(t,"NavLink",function(){return i.a});/* harmony import */
var u=o("./node_modules/react-router-dom/es/Prompt.js");/* harmony reexport (binding) */
o.d(t,"Prompt",function(){return u.a});/* harmony import */
var c=o("./node_modules/react-router-dom/es/Redirect.js");/* harmony reexport (binding) */
o.d(t,"Redirect",function(){return c.a});/* harmony import */
var l=o("./node_modules/react-router-dom/es/Route.js");/* harmony reexport (binding) */
o.d(t,"Route",function(){return l.a});/* harmony import */
var d=o("./node_modules/react-router-dom/es/Router.js");/* harmony reexport (binding) */
o.d(t,"Router",function(){return d.a});/* harmony import */
var f=o("./node_modules/react-router-dom/es/StaticRouter.js");/* harmony reexport (binding) */
o.d(t,"StaticRouter",function(){return f.a});/* harmony import */
var p=o("./node_modules/react-router-dom/es/Switch.js");/* harmony reexport (binding) */
o.d(t,"Switch",function(){return p.a});/* harmony import */
var h=o("./node_modules/react-router-dom/es/matchPath.js");/* harmony reexport (binding) */
o.d(t,"matchPath",function(){return h.a});/* harmony import */
var m=o("./node_modules/react-router-dom/es/withRouter.js");/* harmony reexport (binding) */
o.d(t,"withRouter",function(){return m.a})},/***/
"./node_modules/react-router-dom/es/matchPath.js":/***/
function(e,t,o){"use strict";/* harmony import */
var r=o("./node_modules/react-router/es/matchPath.js");
// Written in this round about way for babel-transform-imports
/* harmony default export */
t.a=r.a},/***/
"./node_modules/react-router-dom/es/withRouter.js":/***/
function(e,t,o){"use strict";/* harmony import */
var r=o("./node_modules/react-router/es/withRouter.js");
// Written in this round about way for babel-transform-imports
/* harmony default export */
t.a=r.a},/***/
"./universal/components/Home/Home.css":/***/
function(e,t,o){
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var r=o('./node_modules/css-loader/index.js?{"modules":true,"importLoaders":1,"localIdentName":"[name]_[local]_[hash:base64:5]"}!./node_modules/postcss-loader/index.js?{}!./universal/components/Home/Home.css');"string"==typeof r&&(r=[[e.i,r,""]]);
// add the styles to the DOM
o("./node_modules/style-loader/addStyles.js")(r,{});r.locals&&(e.exports=r.locals)},/***/
"./universal/components/Home/Home.js":/***/
function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),u=o("./node_modules/react/react.js"),c=r(u),l=o("./node_modules/react-router-dom/es/index.js"),d=o("./universal/components/Home/Home.css"),f=r(d),p=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),i(t,[{key:"render",value:function(){return c.default.createElement("div",{className:f.default.home},c.default.createElement("h1",{className:f.default.title},"⚡ Black Magic ⚡"),c.default.createElement("div",{className:f.default.center},c.default.createElement(l.Link,{className:f.default.button,to:"/counter"},"Go to App")))}}]),t}(u.Component);t.default=p,e.exports=t.default}});