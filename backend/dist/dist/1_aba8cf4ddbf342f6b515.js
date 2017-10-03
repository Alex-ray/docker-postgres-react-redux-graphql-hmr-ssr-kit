webpackJsonp([1],{/***/
'./node_modules/css-loader/index.js?{"root":"/frontend","modules":true,"importLoaders":1,"localIdentName":"[name]_[local]_[hash:base64:5]"}!./node_modules/postcss-loader/index.js?{}!./universal/components/Home/Home.css':/***/
function(e,n,o){n=e.exports=o("./node_modules/css-loader/lib/css-base.js")(),
// imports
// module
n.push([e.i,"\n.Home_home_3d18- {\n  max-width: 750px;\n}\n\n.Home_center_1OtD0 {\n  text-align: center;\n}\n\n.Home_title_oF0Zn {\n  color: white;\n  font-size: 3em;\n  display: block;\n  text-align: center;\n  width: 100%;\n}\n\n.Home_button_2iesV {\n  display: inline-block;\n  margin-top: 50px;\n  padding: 15px 40px;\n  font-size: 1.5em;\n  text-align: center;\n  color: #E4E7EB;\n  background-color: #F48F94;\n  border: solid 7px #F27D83;\n  border-radius: 100px;\n  text-decoration: none;\n  margin-top: 50px;\n\n}\n\n.Home_button_2iesV:hover {\n  border-color: #F48F94;\n}\n",""]),
// exports
n.locals={home:"Home_home_3d18-",center:"Home_center_1OtD0",title:"Home_title_oF0Zn",button:"Home_button_2iesV"}},/***/
"./universal/components/Home/Home.css":/***/
function(e,n,o){
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var t=o('./node_modules/css-loader/index.js?{"root":"/frontend","modules":true,"importLoaders":1,"localIdentName":"[name]_[local]_[hash:base64:5]"}!./node_modules/postcss-loader/index.js?{}!./universal/components/Home/Home.css');"string"==typeof t&&(t=[[e.i,t,""]]);
// add the styles to the DOM
o("./node_modules/style-loader/addStyles.js")(t,{});t.locals&&(e.exports=t.locals)},/***/
"./universal/components/Home/Home.js":/***/
function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function s(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){function e(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,o,t){return o&&e(n.prototype,o),t&&e(n,t),n}}(),i=o("./node_modules/react/react.js"),c=t(i),u=o("./universal/components/Home/Home.css"),d=t(u),m=function(e){function n(){return r(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),l(n,[{key:"render",value:function(){return c.default.createElement("div",{className:d.default.home},c.default.createElement("h1",{className:d.default.title},"⚡ Black Magic ⚡"),c.default.createElement("a",{href:"/auth/instagram"},"Login with Instagram"))}}]),n}(i.Component);n.default=m}});