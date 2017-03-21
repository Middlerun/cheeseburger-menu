'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEasySwipe = require('react-easy-swipe');

var _reactEasySwipe2 = _interopRequireDefault(_reactEasySwipe);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CheeseburgerMenu extends _react.Component {
  constructor() {
    super();
    this.state = {
      swiping: false,
      swipePosition: { x: 0, y: 0 },
      menuExtraStyle: {}
    };
  }

  onSwipeStart(event) {
    if (this.props.isOpen) {
      this.setState({
        swiping: true
      });
    }
  }

  onSwipeMove(position, event) {
    if (this.state.swiping) {
      const snapOpenThreshold = this.options.width / 15;
      const pastThreshold = !this.props.right && position.x < -snapOpenThreshold || this.props.right && position.x > snapOpenThreshold;
      const translateX = pastThreshold ? position.x : 0;

      this.setState(_extends({}, this.state, {
        swipePosition: position,
        menuExtraStyle: {
          transform: `translate3d(${translateX}px, 0px, 0px)`,
          transition: 'transform 0s'
        }
      }));
    }
  }

  onSwipeEnd(event) {
    const swipeCloseThreshold = this.options.width / 3;
    if (!this.props.right && this.state.swipePosition.x < -swipeCloseThreshold || this.props.right && this.state.swipePosition.x > swipeCloseThreshold) {
      this.props.closeCallback();
    }
    this.setState({
      swiping: false,
      swipePosition: { x: 0, y: 0 },
      menuExtraStyle: {}
    });
  }

  componentWillMount() {
    this.options = {
      isLeft: !this.props.right,
      transitionTime: this.props.transitionTime || 0.3,
      topOffset: this.props.topOffset || 0,
      width: this.props.width || 300,
      backgroundColor: this.props.backgroundColor || 'white',
      showShadow: !this.props.noShadow
    };
  }

  render() {
    const baseMenuOuterStyle = this.props.isOpen ? (0, _styles.menuOuterActiveStyle)(this.options) : (0, _styles.menuOuterStyle)(this.options);
    const currentMenuOuterStyle = _extends({}, baseMenuOuterStyle, this.state.menuExtraStyle);

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
          )
        )
      )
    );
  }
}

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