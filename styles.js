"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var overlayStyle = function overlayStyle(options) {
  return {
    position: "fixed",
    top: options.topOffset,
    zIndex: 1001,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.3)",
    opacity: 0,
    transition: "opacity " + options.transitionTime + "s, transform 0s " + options.transitionTime + "s",
    transform: options.isLeft ? "translate3d(100%, 0px, 0px)" : "translate3d(-100%, 0px, 0px)"
  };
};

var overlayActiveStyle = function overlayActiveStyle(options) {
  return _extends({}, overlayStyle(options), {
    opacity: 1,
    transition: "opacity " + options.transitionTime + "s",
    transform: "none"
  });
};

var menuOuterStyle = function menuOuterStyle(options) {
  return {
    position: "fixed",
    left: options.isLeft ? 0 : "inherit",
    right: options.isLeft ? "inherit" : 0,
    top: options.topOffset,
    zIndex: 1002,
    width: options.width,
    maxWidth: "80%",
    height: "100%",
    transition: "all " + options.transitionTime + "s",
    transform: options.isLeft ? "translate3d(-100%, 0px, 0px)" : "translate3d(100%, 0px, 0px)",
    backgroundColor: options.backgroundColor
  };
};

var menuOuterActiveStyle = function menuOuterActiveStyle(options) {
  return _extends({}, menuOuterStyle(options), {
    transform: "none",
    boxShadow: options.showShadow ? "0 0 15px 0 rgba(0, 0, 0, .2)" : "none"
  });
};

var menuInnerStyle = function menuInnerStyle(options) {
  return {
    height: "100%",
    paddingBottom: options.topOffset,
    overflowY: "auto"
  };
};

exports.overlayStyle = overlayStyle;
exports.overlayActiveStyle = overlayActiveStyle;
exports.menuOuterStyle = menuOuterStyle;
exports.menuOuterActiveStyle = menuOuterActiveStyle;
exports.menuInnerStyle = menuInnerStyle;