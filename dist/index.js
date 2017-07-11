'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEasySwipe = require('react-easy-swipe');

var _reactEasySwipe2 = _interopRequireDefault(_reactEasySwipe);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheeseburgerMenu = function (_Component) {
  _inherits(CheeseburgerMenu, _Component);

  function CheeseburgerMenu() {
    _classCallCheck(this, CheeseburgerMenu);

    var _this = _possibleConstructorReturn(this, (CheeseburgerMenu.__proto__ || Object.getPrototypeOf(CheeseburgerMenu)).call(this));

    _this.state = {
      swiping: false,
      swipePosition: { x: 0, y: 0 },
      menuExtraStyle: {}
    };
    return _this;
  }

  _createClass(CheeseburgerMenu, [{
    key: 'onSwipeStart',
    value: function onSwipeStart(event) {
      if (this.props.isOpen) {
        this.setState({
          swiping: true
        });
      }
    }
  }, {
    key: 'onSwipeMove',
    value: function onSwipeMove(position, event) {
      if (this.state.swiping) {
        var snapOpenThreshold = this.options.width / 15;
        var pastThreshold = !this.props.right && position.x < -snapOpenThreshold || this.props.right && position.x > snapOpenThreshold;
        var translateX = pastThreshold ? position.x : 0;

        this.setState(_extends({}, this.state, {
          swipePosition: position,
          menuExtraStyle: {
            transform: 'translate3d(' + translateX + 'px, 0px, 0px)',
            transition: 'transform 0s'
          }
        }));
      }
    }
  }, {
    key: 'onSwipeEnd',
    value: function onSwipeEnd(event) {
      var swipeCloseThreshold = this.options.width / 3;
      if (!this.props.right && this.state.swipePosition.x < -swipeCloseThreshold || this.props.right && this.state.swipePosition.x > swipeCloseThreshold) {
        this.props.closeCallback();
      }
      this.setState({
        swiping: false,
        swipePosition: { x: 0, y: 0 },
        menuExtraStyle: {}
      });
    }
  }, {
    key: 'componentWillMount',
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
    key: 'render',
    value: function render() {
      var baseMenuOuterStyle = this.props.isOpen ? (0, _styles.menuOuterActiveStyle)(this.options) : (0, _styles.menuOuterStyle)(this.options);
      var currentMenuOuterStyle = _extends({}, baseMenuOuterStyle, this.state.menuExtraStyle);

      return _react2.default.createElement(
        'div',
        { className: "cheeseburger-menu" + (this.props.isOpen ? " open" : "") },
        _react2.default.createElement('div', { className: 'cheeseburger-menu-overlay',
          style: this.props.isOpen ? (0, _styles.overlayActiveStyle)(this.options) : (0, _styles.overlayStyle)(this.options),
          onClick: this.props.closeCallback }),
        _react2.default.createElement(
          _reactEasySwipe2.default,
          { onSwipeStart: this.onSwipeStart.bind(this),
            onSwipeMove: this.onSwipeMove.bind(this),
            onSwipeEnd: this.onSwipeEnd.bind(this) },
          _react2.default.createElement(
            'div',
            { className: 'cheeseburger-menu-outer', style: currentMenuOuterStyle },
            _react2.default.createElement(
              'div',
              { className: 'cheeseburger-menu-inner', style: (0, _styles.menuInnerStyle)(this.options) },
              this.props.children
            ),
            _react2.default.createElement('div', { className: 'cheeseburger-menu-shadow',
              style: this.props.isOpen ? (0, _styles.menuShadowActiveStyle)(this.options) : (0, _styles.menuShadowStyle)(this.options) })
          )
        )
      );
    }
  }]);

  return CheeseburgerMenu;
}(_react.Component);

CheeseburgerMenu.PropTypes = {
  isOpen: _react2.default.PropTypes.bool.isRequired,
  closeCallback: _react2.default.PropTypes.func.isRequired,
  right: _react2.default.PropTypes.bool,
  transitionTime: _react2.default.PropTypes.number,
  topOffset: _react2.default.PropTypes.number,
  width: _react2.default.PropTypes.number,
  backgroundColor: _react2.default.PropTypes.string,
  noShadow: _react2.default.PropTypes.bool
};

exports.default = CheeseburgerMenu;