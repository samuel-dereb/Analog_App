"use strict";

var _interopRequireDefault = require("/Users/sam/projects/reactapp/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _logo = _interopRequireDefault(require("./logo.svg"));

require("./App.css");

var _ThreeDSpiral = _interopRequireDefault(require("../src/Components/animations/ThreeDSpiral.pug"));

var _jsxFileName = "/Users/sam/projects/reactapp/src/App.js";

function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react.default.createElement(_ThreeDSpiral.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 6
    }
  }));
}

var _default = App;
exports.default = _default;