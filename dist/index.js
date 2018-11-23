(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"), require("react-easy-swipe"));
	else if(typeof define === 'function' && define.amd)
		define("cheeseburger-menu", ["prop-types", "React", "react-easy-swipe"], factory);
	else if(typeof exports === 'object')
		exports["cheeseburger-menu"] = factory(require("prop-types"), require("react"), require("react-easy-swipe"));
	else
		root["cheeseburger-menu"] = factory(root["prop-types"], root["React"], root["react-easy-swipe"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"react","commonjs2":"react","amd":"React","root":"React"}
var external_commonjs_react_commonjs2_react_amd_React_root_React_ = __webpack_require__(1);
var external_commonjs_react_commonjs2_react_amd_React_root_React_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_react_commonjs2_react_amd_React_root_React_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(0);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "react-easy-swipe"
var external_react_easy_swipe_ = __webpack_require__(2);
var external_react_easy_swipe_default = /*#__PURE__*/__webpack_require__.n(external_react_easy_swipe_);

// CONCATENATED MODULE: ./src/styles.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var overlayStyle = function overlayStyle(options) {
  return {
    position: "fixed",
    top: options.topOffset,
    zIndex: 1001,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.3)",
    opacity: 0,
    transition: "opacity ".concat(options.transitionTime, "s, transform 0s ").concat(options.transitionTime, "s"),
    transform: options.isLeft ? "translate3d(100%, 0px, 0px)" : "translate3d(-100%, 0px, 0px)"
  };
};

var overlayActiveStyle = function overlayActiveStyle(options) {
  return _objectSpread({}, overlayStyle(options), {
    opacity: 1,
    transition: "opacity ".concat(options.transitionTime, "s"),
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
    transition: "transform ".concat(options.transitionTime, "s"),
    transform: options.isLeft ? "translate3d(-100%, 0px, 0px)" : "translate3d(100%, 0px, 0px)",
    backgroundColor: options.backgroundColor
  };
};

var menuOuterActiveStyle = function menuOuterActiveStyle(options) {
  return _objectSpread({}, menuOuterStyle(options), {
    transform: "translate3d(0px, 0px, 0px)"
  });
};

var menuShadowStyle = function menuShadowStyle(options) {
  return {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    transition: "opacity ".concat(options.transitionTime, "s"),
    boxShadow: options.showShadow ? "0 0 15px 0 rgba(0, 0, 0, .2)" : "none",
    opacity: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  };
};

var menuShadowActiveStyle = function menuShadowActiveStyle(options) {
  return _objectSpread({}, menuShadowStyle(options), {
    opacity: 1
  });
};

var menuInnerStyle = function menuInnerStyle(options) {
  return {
    height: "100%",
    paddingBottom: options.topOffset,
    overflowY: "auto"
  };
};


// CONCATENATED MODULE: ./src/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function src_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { src_defineProperty(target, key, source[key]); }); } return target; }

function src_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var src_CheeseburgerMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(CheeseburgerMenu, _Component);

  function CheeseburgerMenu() {
    var _this;

    _classCallCheck(this, CheeseburgerMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheeseburgerMenu).call(this));
    _this.state = {
      swiping: false,
      swipePosition: {
        x: 0,
        y: 0
      },
      menuExtraStyle: {}
    };
    return _this;
  }

  _createClass(CheeseburgerMenu, [{
    key: "onSwipeStart",
    value: function onSwipeStart(event) {
      if (this.props.isOpen) {
        this.setState({
          swiping: true
        });
      }
    }
  }, {
    key: "onSwipeMove",
    value: function onSwipeMove(position, event) {
      if (this.state.swiping) {
        var snapOpenThreshold = this.options.width / 15;
        var pastThreshold = !this.props.right && position.x < -snapOpenThreshold || this.props.right && position.x > snapOpenThreshold;
        var translateX = pastThreshold ? position.x : 0;
        this.setState({
          swipePosition: position,
          menuExtraStyle: {
            transform: "translate3d(".concat(translateX, "px, 0px, 0px)"),
            transition: 'transform 0s'
          }
        });
      }
    }
  }, {
    key: "onSwipeEnd",
    value: function onSwipeEnd(event) {
      var swipeCloseThreshold = this.options.width / 3;

      if (!this.props.right && this.state.swipePosition.x < -swipeCloseThreshold || this.props.right && this.state.swipePosition.x > swipeCloseThreshold) {
        this.props.closeCallback();
      }

      this.setState({
        swiping: false,
        swipePosition: {
          x: 0,
          y: 0
        },
        menuExtraStyle: {}
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.options = {
        isLeft: !this.props.right,
        transitionTime: this.props.transitionTime || 0.3,
        topOffset: this.props.topOffset || 0,
        width: this.props.width || 300,
        backgroundColor: this.props.backgroundColor || 'white',
        showShadow: !this.props.noShadow
      };
    }
  }, {
    key: "render",
    value: function render() {
      var baseMenuOuterStyle = this.props.isOpen ? menuOuterActiveStyle(this.options) : menuOuterStyle(this.options);

      var currentMenuOuterStyle = src_objectSpread({}, baseMenuOuterStyle, this.state.menuExtraStyle);

      return external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: "cheeseburger-menu" + (this.props.isOpen ? " open" : "")
      }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: "cheeseburger-menu-overlay",
        style: this.props.isOpen ? overlayActiveStyle(this.options) : overlayStyle(this.options),
        onClick: this.props.closeCallback
      }), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement(external_react_easy_swipe_default.a, {
        onSwipeStart: this.onSwipeStart.bind(this),
        onSwipeMove: this.onSwipeMove.bind(this),
        onSwipeEnd: this.onSwipeEnd.bind(this)
      }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: "cheeseburger-menu-outer",
        style: currentMenuOuterStyle
      }, external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: "cheeseburger-menu-inner",
        style: menuInnerStyle(this.options)
      }, this.props.children), external_commonjs_react_commonjs2_react_amd_React_root_React_default.a.createElement("div", {
        className: "cheeseburger-menu-shadow",
        style: this.props.isOpen ? menuShadowActiveStyle(this.options) : menuShadowStyle(this.options)
      }))));
    }
  }]);

  return CheeseburgerMenu;
}(external_commonjs_react_commonjs2_react_amd_React_root_React_["Component"]);

src_CheeseburgerMenu.propTypes = {
  isOpen: external_prop_types_default.a.bool.isRequired,
  closeCallback: external_prop_types_default.a.func.isRequired,
  right: external_prop_types_default.a.bool,
  transitionTime: external_prop_types_default.a.number,
  topOffset: external_prop_types_default.a.number,
  width: external_prop_types_default.a.number,
  backgroundColor: external_prop_types_default.a.string,
  noShadow: external_prop_types_default.a.bool
};
/* harmony default export */ var src = __webpack_exports__["default"] = (src_CheeseburgerMenu);

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map