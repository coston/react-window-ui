'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MacTerminal = exports.Terminal = exports.Browser = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  border: ', ';\n  background: ', ';\n  ', ' &:after {\n    top: 0.8em;\n    left: 0.8em;\n    ', ';\n  }\n  &:before {\n    height: ', ';\n    border-bottom: ', ';\n    background: ', ';\n    ', ';\n  }\n'], ['\n  border: ', ';\n  background: ', ';\n  ', ' &:after {\n    top: 0.8em;\n    left: 0.8em;\n    ', ';\n  }\n  &:before {\n    height: ', ';\n    border-bottom: ', ';\n    background: ', ';\n    ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border: ', ';\n  background: ', ';\n  color: white;\n  ', ' &:after {\n    top: 0.8em;\n    left: 0.8em;\n    ', ';\n  }\n  &:before {\n    height: ', ';\n    background: ', ';\n    border-bottom: ', ';\n    background: ', ';\n    ', ';\n  }\n'], ['\n  border: ', ';\n  background: ', ';\n  color: white;\n  ', ' &:after {\n    top: 0.8em;\n    left: 0.8em;\n    ', ';\n  }\n  &:before {\n    height: ', ';\n    background: ', ';\n    border-bottom: ', ';\n    background: ', ';\n    ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  border: ', ';\n  background: ', ';\n  color: white;\n  ', ' &:after {\n    top: 0.5em;\n    left: 0.6em;\n    ', ';\n  }\n  &:before {\n    height: ', ';\n    border-bottom: ', ';\n    background: ', ';\n    ', ';\n  }\n'], ['\n  border: ', ';\n  background: ', ';\n  color: white;\n  ', ' &:after {\n    top: 0.5em;\n    left: 0.6em;\n    ', ';\n  }\n  &:before {\n    height: ', ';\n    border-bottom: ', ';\n    background: ', ';\n    ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var standard = function standard(props) {
  return '\n  padding: ' + (props.padding || '2.25em .5em .5em .5em') + ';\n  resize: ' + (props.resize && 'both' || 'none') + ';\n  min-height: ' + (props.minHeight || '11em') + ';\n  min-width: ' + (props.minWidth || '11em') + ';\n  max-height: ' + (props.maxHeight || null) + ';\n  max-width: ' + (props.maxWidth || '100%') + ';\n  height: ' + (props.height || null) + ';\n  box-shadow: 0 20px 68px rgba(0, 0, 0, 0.55);\n  border-radius: 0.5em;\n  position: relative;\n  overflow: auto;\n  z-index: 2;\n';
};
var after = function after(props) {
  return '\n  content: \'\';\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  z-index: 2;\n  border-radius: 50%;\n  background: ' + (props.grayscale ? '#8D8D92' : '#f85955') + ';\n  box-shadow: ' + (props.grayscale ? '0 0 0 0.2em #8D8D92,  1.1em 0 0 0.2em #8D8D92, 2.2em 0 0 0.2em #8D8D92' : '0 0 0 0.2em #f85955,  1.2em 0 0 0.2em #fbbe3f, 2.3em 0 0 0.2em #45cc4b') + ';\n}\n';
};

var before = function before() {
  return '\ncontent: \'\';\nposition: absolute;\ntop: 0;\nleft: 0;\nwidth: 100%;\nz-index: 1;\nborder-top-left-radius: 0.4em;\nborder-top-right-radius: 0.4em;\nbackground-clip: padding-box;\n';
};

var Browser = exports.Browser = _styledComponents2.default.div(_templateObject, function (props) {
  return props.border || '0.05em solid #AEAEAE';
}, function (props) {
  return props.background || '#fff';
}, standard, after, function (props) {
  return props.barHeight || '2em';
}, function (props) {
  return props.divider || '0.05em solid #ccc';
}, function (props) {
  return props.topbarColor || '#E6E6E6';
}, before);

var Terminal = exports.Terminal = _styledComponents2.default.section(_templateObject2, function (props) {
  return props.border || '0.05em solid #000';
}, function (props) {
  return props.background || '#000';
}, standard, after, function (props) {
  return props.barHeight || '2em';
}, function (props) {
  return props.background || '#000';
}, function (props) {
  return props.divider || '0.05em solid #000';
}, function (props) {
  return props.topbarColor || '#000';
}, before);

var MacTerminal = exports.MacTerminal = _styledComponents2.default.section(_templateObject3, function (props) {
  return props.border || '0.0em solid #1D1F21';
}, function (props) {
  return props.background || '#000';
}, standard, after, function (props) {
  return props.barHeight || '1.4em';
}, function (props) {
  return props.divider || '0.05em solid #1D1F21';
}, function (props) {
  return props.topbarColor || '#E6E6E6';
}, before);