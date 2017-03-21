'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeToJson = require('enzyme-to-json');

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const emptyFunc = () => null;

describe('<CheeseburgerMenu/>', () => {
  it('matches snapshot when closed', () => {
    const closedMenu = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { isOpen: false, closeCallback: emptyFunc }));
    expect((0, _enzymeToJson2.default)(closedMenu)).toMatchSnapshot();
  });

  it('matches snapshot when open', () => {
    const openMenu = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { isOpen: true, closeCallback: emptyFunc }));
    expect((0, _enzymeToJson2.default)(openMenu)).toMatchSnapshot();
  });
});