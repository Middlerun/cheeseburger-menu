'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shallow = require('react-test-renderer/shallow');

var _shallow2 = _interopRequireDefault(_shallow);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderer = new _shallow2.default();

var emptyFunc = function emptyFunc() {
  return null;
};

describe('<CheeseburgerMenu/>', function () {
  it('matches snapshot when closed', function () {
    var closedMenu = renderer.render(_react2.default.createElement(_index2.default, { isOpen: false, closeCallback: emptyFunc }));
    expect(closedMenu).toMatchSnapshot();
  });

  it('matches snapshot when open', function () {
    var openMenu = renderer.render(_react2.default.createElement(_index2.default, { isOpen: true, closeCallback: emptyFunc }));
    expect(openMenu).toMatchSnapshot();
  });
});