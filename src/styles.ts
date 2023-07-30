import type React from 'react'

export interface StyleOptions {
  isLeft: boolean,
  transitionTime: number,
  topOffset: number | string,
  bottomOffset: number | string,
  width: number,
  backgroundColor: string,
  showShadow: boolean,
  skewY: number,
}

export const overlayStyle = (options: StyleOptions): React.CSSProperties => ({
  position: 'fixed',
  top: options.topOffset,
  bottom: options.bottomOffset,
  left: 0,
  right: 0,
  zIndex: 1001,
  background: 'rgba(0, 0, 0, 0.3)',
  opacity: 0,
  transition: `opacity ${options.transitionTime}s, transform 0s ${options.transitionTime}s`,
  transform: `translate3d(${options.isLeft ? '' : '-'}100%, 0px, 0px)`,
})

export const overlayActiveStyle = (options: StyleOptions): React.CSSProperties => ({
  ...overlayStyle(options),
  opacity: 1,
  transition: `opacity ${options.transitionTime}s`,
  transform: 'none',
})

export const menuOuterStyle = (options: StyleOptions): React.CSSProperties => ({
  position: 'fixed',
  left: (options.isLeft ? 0 : 'inherit'),
  right: (options.isLeft ? 'inherit' : 0),
  top: options.topOffset,
  bottom: options.bottomOffset,
  zIndex: 1002,
  width: options.width,
  maxWidth: '80%',
  transition: `transform ${options.transitionTime}s`,
  transform: getSkew(options) + `translate3d(${options.isLeft ? '-' : ''}100%, 0px, 0px)`,
  transformOrigin: 'left',
  backgroundColor: options.backgroundColor,
})

export const menuOuterActiveStyle = (options: StyleOptions): React.CSSProperties => ({
  ...menuOuterStyle(options),
  transform: getSkew(options) + 'translate3d(0px, 0px, 0px)',
})

export const menuShadowStyle = (options: StyleOptions): React.CSSProperties => ({
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

export const menuShadowActiveStyle = (options: StyleOptions): React.CSSProperties => ({
  ...menuShadowStyle(options),
  opacity: 1,
})

export const menuInnerStyle = (options: StyleOptions): React.CSSProperties => ({
  height: '100%',
  paddingBottom: options.topOffset,
  overflowY: 'auto',
})

export function getSkew(options: StyleOptions) {
  return options.skewY ? `skewY(${options.skewY}deg) ` : ''
}
