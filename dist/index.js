'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MacTerminal = exports.Terminal = exports.Browser = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  border: ', ';\n  border-radius: 0.5rem;\n  box-shadow: 0 20px 68px rgba(0, 0, 0, .55);\n  background: ', ';\n  max-width: 100%;\n  min-height: 22rem;\n  z-index: 2;\n  padding: ', ';\n  &:after {\n    content: \'\';\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    top: .8rem;\n    left: .8rem;\n    z-index: 2;\n    border-radius: 50%;\n    background: ', ';\n    box-shadow: ', ';\n  }\n  &:before {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: ', ';\n    border-bottom: ', ';\n    z-index: 1;\n    border-top-left-radius: 0.4rem;\n    border-top-right-radius: 0.4rem;\n    background-clip: padding-box;\n    background: ', ';\n  }\n'], ['\n  position: relative;\n  border: ', ';\n  border-radius: 0.5rem;\n  box-shadow: 0 20px 68px rgba(0, 0, 0, .55);\n  background: ', ';\n  max-width: 100%;\n  min-height: 22rem;\n  z-index: 2;\n  padding: ', ';\n  &:after {\n    content: \'\';\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    top: .8rem;\n    left: .8rem;\n    z-index: 2;\n    border-radius: 50%;\n    background: ', ';\n    box-shadow: ', ';\n  }\n  &:before {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: ', ';\n    border-bottom: ', ';\n    z-index: 1;\n    border-top-left-radius: 0.4rem;\n    border-top-right-radius: 0.4rem;\n    background-clip: padding-box;\n    background: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  border: ', ';\n  border-radius: 0.5rem;\n  color: white;\n  box-shadow: 0 20px 68px rgba(0, 0, 0, .55);\n  background: ', ';\n  max-width: 100%;\n  min-height: 22rem;\n  z-index: 2;\n  padding: ', ';\n  &:after {\n    content: \'\';\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    top: .8rem;\n    left: .8rem;\n    z-index: 2;\n    border-radius: 50%;\n    background: ', ';\n    box-shadow: ', ';\n  }\n  &:before {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: ', ';\n    background: ', ';\n    border-bottom: ', ';\n    z-index: 1;\n    border-top-left-radius: 0.4rem;\n    border-top-right-radius: 0.4rem;\n    background-clip: padding-box;\n    background: ', ';\n  }\n'], ['\n  position: relative;\n  border: ', ';\n  border-radius: 0.5rem;\n  color: white;\n  box-shadow: 0 20px 68px rgba(0, 0, 0, .55);\n  background: ', ';\n  max-width: 100%;\n  min-height: 22rem;\n  z-index: 2;\n  padding: ', ';\n  &:after {\n    content: \'\';\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    top: .8rem;\n    left: .8rem;\n    z-index: 2;\n    border-radius: 50%;\n    background: ', ';\n    box-shadow: ', ';\n  }\n  &:before {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: ', ';\n    background: ', ';\n    border-bottom: ', ';\n    z-index: 1;\n    border-top-left-radius: 0.4rem;\n    border-top-right-radius: 0.4rem;\n    background-clip: padding-box;\n    background: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  border: ', ';\n  border-radius: 0.5rem;\n  color: white;\n  box-shadow: 0 20px 68px rgba(0, 0, 0, .55);\n  background: ', ';\n  max-width: 100%;\n  min-height: 22rem;\n  z-index: 2;\n  padding: ', ';\n  &:after {\n    content: \'\';\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    top: .50rem;\n    left: .6rem;\n    z-index: 2;\n    border-radius: 50%;\n    background: #f85955;\n    background: ', ';\n    box-shadow: ', ';\n  }\n  &:before {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-bottom: 5em;\n    width: 100%;\n    height: ', ';\n    border-bottom: ', ';\n    z-index: 1;\n    border-top-left-radius: 0.4rem;\n    border-top-right-radius: 0.4rem;\n    background-clip: padding-box;\n    background: ', ';\n  }\n'], ['\n  position: relative;\n  border: ', ';\n  border-radius: 0.5rem;\n  color: white;\n  box-shadow: 0 20px 68px rgba(0, 0, 0, .55);\n  background: ', ';\n  max-width: 100%;\n  min-height: 22rem;\n  z-index: 2;\n  padding: ', ';\n  &:after {\n    content: \'\';\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    top: .50rem;\n    left: .6rem;\n    z-index: 2;\n    border-radius: 50%;\n    background: #f85955;\n    background: ', ';\n    box-shadow: ', ';\n  }\n  &:before {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-bottom: 5em;\n    width: 100%;\n    height: ', ';\n    border-bottom: ', ';\n    z-index: 1;\n    border-top-left-radius: 0.4rem;\n    border-top-right-radius: 0.4rem;\n    background-clip: padding-box;\n    background: ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Browser = exports.Browser = _styledComponents2.default.section.attrs({
  barHeight: function barHeight(props) {
    return props.barHeight || '2rem';
  },
  padding: function padding(props) {
    return props.padding || '2.25rem .5rem .5rem .5rem';
  },
  topbarColor: function topbarColor(props) {
    return props.topbarColor || '#E6E6E6';
  },
  background: function background(props) {
    return props.background || '#fff';
  },
  border: function border(props) {
    return props.border || '0.05rem solid #AEAEAE';
  },
  divider: function divider(props) {
    return props.divider || '0.05rem solid #ccc';
  }

})(_templateObject, function (props) {
  return props.border;
}, function (props) {
  return props.background;
}, function (props) {
  return props.padding;
}, function (props) {
  return props.grayscale ? '#8D8D92' : '#f85955';
}, function (props) {
  return props.grayscale ? '0 0 0 0.2em #8D8D92,  1.1em 0 0 0.2em #8D8D92, 2.2em 0 0 0.2em #8D8D92' : '0 0 0 0.2em #f85955,  1.2em 0 0 0.2em #fbbe3f, 2.3em 0 0 0.2em #45cc4b';
}, function (props) {
  return props.barHeight;
}, function (props) {
  return props.divider;
}, function (props) {
  return props.topbarColor;
});

var Terminal = exports.Terminal = _styledComponents2.default.section.attrs({
  barHeight: function barHeight(props) {
    return props.barHeight || '2rem';
  },
  padding: function padding(props) {
    return props.padding || '2.25rem .5rem .5rem .5rem';
  },
  topbarColor: function topbarColor(props) {
    return props.topbarColor || '#000';
  },
  background: function background(props) {
    return props.background || '#000';
  },
  border: function border(props) {
    return props.border || '0.05rem solid #000';
  },
  divider: function divider(props) {
    return props.divider || '0.05rem solid #000';
  }

})(_templateObject2, function (props) {
  return props.border;
}, function (props) {
  return props.background;
}, function (props) {
  return props.padding;
}, function (props) {
  return props.grayscale ? '#8D8D92' : '#f85955';
}, function (props) {
  return props.grayscale ? '0 0 0 0.2em #8D8D92,  1.1em 0 0 0.2em #8D8D92, 2.2em 0 0 0.2em #8D8D92' : '0 0 0 0.2em #f85955,  1.1em 0 0 0.2em #fbbe3f, 2.2em 0 0 0.2em #45cc4b';
}, function (props) {
  return props.barHeight;
}, function (props) {
  return props.background;
}, function (props) {
  return props.divider;
}, function (props) {
  return props.topbarColor;
});

var MacTerminal = exports.MacTerminal = _styledComponents2.default.section.attrs({
  barHeight: function barHeight(props) {
    return props.barHeight || '1.4rem';
  },
  padding: function padding(props) {
    return props.padding || '2.25rem .5rem .5rem .5rem';
  },
  topbarColor: function topbarColor(props) {
    return props.topbarColor || '#E6E6E6';
  },
  background: function background(props) {
    return props.background || '#000';
  },
  border: function border(props) {
    return props.border || '0.0rem solid #1D1F21';
  },
  divider: function divider(props) {
    return props.divider || '0.05rem solid #1D1F21';
  }

})(_templateObject3, function (props) {
  return props.border;
}, function (props) {
  return props.background;
}, function (props) {
  return props.padding;
}, function (props) {
  return props.grayscale ? '#8D8D92' : '#f85955';
}, function (props) {
  return props.grayscale ? '0 0 0 0.2em #8D8D92,  1.1em 0 0 0.2rem #8D8D92, 2.2em 0 0 0.2rem #8D8D92' : '0 0 0 0.2rem #f85955,  1.1rem 0 0 0.2rem #fbbe3f, 2.2rem 0 0 0.2rem #45cc4b';
}, function (props) {
  return props.barHeight;
}, function (props) {
  return props.divider;
}, function (props) {
  return props.topbarColor;
});