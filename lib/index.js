"use strict";

var _interopRequireDefault = require("/Users/sam/projects/reactapp/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("/Users/sam/projects/reactapp/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

var _App = _interopRequireDefault(require("./App"));

var serviceWorker = _interopRequireWildcard(require("./serviceWorker"));

var _jsxFileName = "/Users/sam/projects/reactapp/src/index.js";

_reactDom.default.render( /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, {
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/_react.default.createElement(_App.default, {
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();