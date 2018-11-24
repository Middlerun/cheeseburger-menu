const overlayStyle = (options) => ({
  position: 'fixed',
  top: options.topOffset,
  zIndex: 1001,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.3)',
  opacity: 0,
  transition: `opacity ${options.transitionTime}s, transform 0s ${options.transitionTime}s`,
  transform: (options.isLeft ? 'translate3d(100%, 0px, 0px)' : 'translate3d(-100%, 0px, 0px)'),
})

const overlayActiveStyle = (options) => ({
  ...overlayStyle(options),
  opacity: 1,
  transition: `opacity ${options.transitionTime}s`,
  transform: 'none',
})

const menuOuterStyle = (options) => ({
  position: 'fixed',
  left: (options.isLeft ? 0 : 'inherit'),
  right: (options.isLeft ? 'inherit' : 0),
  top: options.topOffset,
  zIndex: 1002,
  width: options.width,
  maxWidth: '80%',
  height: '100%',
  transition: `transform ${options.transitionTime}s`,
  transform: (options.isLeft ? 'translate3d(-100%, 0px, 0px)' : 'translate3d(100%, 0px, 0px)'),
  backgroundColor: options.backgroundColor,
})

const menuOuterActiveStyle = (options) => ({
  ...menuOuterStyle(options),
  transform: 'translate3d(0px, 0px, 0px)',
})

const menuShadowStyle = (options) => ({
  position: 'absolute',
  zIndex: -1,
  width: '100%',
  height: '100%',
  transition: `opacity ${options.transitionTime}s`,
  boxShadow: (options.showShadow ? '0 0 15px 0 rgba(0, 0, 0, .2)' : 'none'),
  opacity: 0,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
})

const menuShadowActiveStyle = (options) => ({
  ...menuShadowStyle(options),
  opacity: 1,
})

const menuInnerStyle = (options) => ({
  height: '100%',
  paddingBottom: options.topOffset,
  overflowY: 'auto',
})

export { overlayStyle, overlayActiveStyle, menuOuterStyle, menuOuterActiveStyle, menuShadowStyle, menuShadowActiveStyle, menuInnerStyle }
