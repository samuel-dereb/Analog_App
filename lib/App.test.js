"use strict";

var _interopRequireDefault = require("/Users/sam/projects/reactapp/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _App = _interopRequireDefault(require("./App"));

var _this = void 0,
    _jsxFileName = "/Users/sam/projects/reactapp/src/App.test.js";

test('renders learn react link', function () {
  var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_App.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 32
    }
  })),
      getByText = _render.getByText;

  var linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});