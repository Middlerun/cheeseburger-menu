import type { CSSProperties } from 'react'
import React, { Component } from 'react'
import type { SwipeEvent, SwipePosition } from 'react-easy-swipe'
import Swipe from 'react-easy-swipe'
import clsx from 'clsx'

import type { StyleOptions } from './styles'
import {
  overlayStyle,
  overlayActiveStyle,
  menuOuterStyle,
  menuOuterActiveStyle,
  menuShadowStyle,
  menuShadowActiveStyle,
  menuInnerStyle,
  getSkew,
} from './styles'

const IDLE = 'idle'
const VERTICAL = 'vertical'
const HORIZONTAL = 'horizontal'

interface Props {
  isOpen: boolean,
  closeCallback: () => void,
  right?: boolean,
  transitionTime?: number,
  topOffset?: CSSProperties['top'],
  bottomOffset?: CSSProperties['bottom'],
  width?: number,
  backgroundColor?: string,
  skewY?: number,
  noShadow?: boolean,
  className?: string,
  overlayClassName?: string,
  outerClassName?: string,
  innerClassName?: string,
  shadowClassName?: string,
  children: React.ReactNode,
}

interface State {
  swiping: boolean,
  direction: typeof IDLE | typeof VERTICAL | typeof HORIZONTAL,
  swipePosition: SwipePosition,
  menuExtraStyle: React.CSSProperties,
}

class CheeseburgerMenu extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      swiping: false,
      direction: IDLE,
      swipePosition: { x: 0, y: 0 },
      menuExtraStyle: {},
    }

    this.onSwipeStart = this.onSwipeStart.bind(this)
    this.onSwipeMove = this.onSwipeMove.bind(this)
    this.onSwipeEnd = this.onSwipeEnd.bind(this)
  }

  onSwipeStart() {
    if (this.props.isOpen) {
      this.setState({
        swiping: true,
      })
    }
  }

  onSwipeMove(position: SwipePosition, event: SwipeEvent) {
    if (this.state.swiping) {
      const options = this.getOptions()
      let direction = this.state.direction

      if (direction === IDLE) {
        const swipeThreshold = options.width / 15
        const pastThreshold = (
          (Math.abs(position.x) > swipeThreshold) ||
          (Math.abs(position.y) > swipeThreshold)
        )

        if (pastThreshold) {
          if (
            (
              (!this.props.right && position.x < 0) ||
              (this.props.right && position.x > 0)
            ) &&
            Math.abs(position.x) > Math.abs(position.y)
          ) {
            direction = HORIZONTAL
          }
          else {
            direction = VERTICAL
          }
        }
      }

      if (direction === HORIZONTAL) {
        const swipeClosing = (
          (!this.props.right && position.x < 0) ||
          (this.props.right && position.x > 0)
        )

        const translateX = (swipeClosing ? position.x : 0)

        this.setState({
          direction,
          swipePosition: position,
          menuExtraStyle: {
            transform: getSkew(options) + `translate3d(${translateX}px, 0px, 0px)`,
            transition: 'transform 0s',
          },
        })

        event.preventDefault()
      }

      if (direction === VERTICAL) {
        this.setState({
          direction,
          swipePosition: { x: 0, y: 0 },
          menuExtraStyle: {},
        })
      }
    }
  }

  onSwipeEnd() {
    const swipeCloseThreshold = this.getOptions().width / 3
    if (
      (!this.props.right && this.state.swipePosition.x < -swipeCloseThreshold) ||
      (this.props.right && this.state.swipePosition.x > swipeCloseThreshold)
    ) {
      this.props.closeCallback()
    }
    this.setState({
      swiping: false,
      direction: IDLE,
      swipePosition: { x: 0, y: 0 },
      menuExtraStyle: {},
    })
  }

  getOptions(): StyleOptions {
    return {
      isLeft: !this.props.right,
      transitionTime: this.props.transitionTime ?? 0.3,
      topOffset: this.props.topOffset ?? 0,
      bottomOffset: this.props.bottomOffset ?? 0,
      width: this.props.width ?? 300,
      backgroundColor: this.props.backgroundColor ?? 'white',
      showShadow: !this.props.noShadow,
      skewY: this.props.skewY ?? 0,
    }
  }

  render() {
    const {
      isOpen,
      closeCallback,
      className,
      overlayClassName,
      outerClassName,
      innerClassName,
      shadowClassName,
      children,
    } = this.props

    const options = this.getOptions()

    const baseMenuOuterStyle = (isOpen ? menuOuterActiveStyle(options) : menuOuterStyle(options))
    const currentMenuOuterStyle = { ...baseMenuOuterStyle, ...this.state.menuExtraStyle }

    return (
      <div
        className={clsx(
          'cheeseburger-menu',
          className,
          { open: isOpen },
        )}
      >
        <div
          className={clsx('cheeseburger-menu-overlay', overlayClassName)}
          style={isOpen ? overlayActiveStyle(options) : overlayStyle(options)}
          onClick={closeCallback}
        />

        <Swipe
          onSwipeStart={this.onSwipeStart}
          onSwipeMove={this.onSwipeMove}
          onSwipeEnd={this.onSwipeEnd}
        >
          <div className={clsx('cheeseburger-menu-outer', outerClassName)} style={currentMenuOuterStyle}>
            <div className={clsx('cheeseburger-menu-inner', innerClassName)} style={menuInnerStyle(options)}>
              {children}
            </div>
            <div
              className={clsx('cheeseburger-menu-shadow', shadowClassName)}
              style={isOpen ? menuShadowActiveStyle(options) : menuShadowStyle(options)}
            />
          </div>
        </Swipe>
      </div>
    )
  }
}

export default CheeseburgerMenu
