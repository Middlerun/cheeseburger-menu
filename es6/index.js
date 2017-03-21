import React, {Component} from 'react'
import Swipe from 'react-easy-swipe'

import {overlayStyle, overlayActiveStyle, menuOuterStyle, menuOuterActiveStyle, menuInnerStyle} from './styles'

class CheeseburgerMenu extends Component {
  constructor() {
    super()
    this.state = {
      swiping: false,
      swipePosition: {x: 0, y: 0},
      menuExtraStyle: {}
    }
  }

  onSwipeStart(event) {
    if (this.props.isOpen) {
      this.setState({
        swiping: true
      })
    }
  }

  onSwipeMove(position, event) {
    if (this.state.swiping) {
      const snapOpenThreshold = this.options.width / 15
      const pastThreshold = (
        (!this.props.right && position.x < -snapOpenThreshold) ||
        ( this.props.right && position.x >  snapOpenThreshold)
      )
      const translateX = (pastThreshold ? position.x : 0)

      this.setState({
        ...this.state,
        swipePosition: position,
        menuExtraStyle: {
          transform: `translate3d(${translateX}px, 0px, 0px)`,
          transition: 'transform 0s'
        }
      })
    }
  }

  onSwipeEnd(event) {
    const swipeCloseThreshold = this.options.width / 3
    if (
      (!this.props.right && this.state.swipePosition.x < -swipeCloseThreshold) ||
      ( this.props.right && this.state.swipePosition.x >  swipeCloseThreshold)
    ) {
      this.props.closeCallback()
    }
    this.setState({
      swiping: false,
      swipePosition: {x: 0, y: 0},
      menuExtraStyle: {}
    })
  }

  componentWillMount() {
    this.options = {
      isLeft: (!this.props.right),
      transitionTime: this.props.transitionTime || 0.3,
      topOffset: this.props.topOffset || 0,
      width: this.props.width || 300,
      backgroundColor: this.props.backgroundColor || 'white',
      showShadow: (!this.props.noShadow)
    }
  }

  render() {
    const baseMenuOuterStyle = (this.props.isOpen ? menuOuterActiveStyle(this.options) : menuOuterStyle(this.options))
    const currentMenuOuterStyle = {...baseMenuOuterStyle, ...this.state.menuExtraStyle}

    return (
      <div className={"cheeseburger-menu" + (this.props.isOpen ? " open" : "")}>
        <div className="cheeseburger-menu-overlay"
             style={this.props.isOpen ? overlayActiveStyle(this.options) : overlayStyle(this.options)}
             onClick={this.props.closeCallback}></div>

        <Swipe onSwipeStart={this.onSwipeStart.bind(this)}
               onSwipeMove={this.onSwipeMove.bind(this)}
               onSwipeEnd={this.onSwipeEnd.bind(this)}>
          <div className="cheeseburger-menu-outer" style={currentMenuOuterStyle}>
            <div className="cheeseburger-menu-inner" style={menuInnerStyle(this.options)}>
              {this.props.children}
            </div>
          </div>
        </Swipe>
      </div>
    )
  }
}

CheeseburgerMenu.PropTypes = {
  isOpen: React.PropTypes.bool.isRequired,
  closeCallback: React.PropTypes.func.isRequired,
  right: React.PropTypes.bool,
  transitionTime: React.PropTypes.number,
  topOffset: React.PropTypes.number,
  width: React.PropTypes.number,
  backgroundColor: React.PropTypes.string,
  noShadow: React.PropTypes.bool
}

export default CheeseburgerMenu
