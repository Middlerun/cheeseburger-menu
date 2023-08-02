import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'

import CheeseburgerMenu from './index'

const emptyFunc = (): null => null

describe('<CheeseburgerMenu/>', () => {
  it('matches snapshot when closed', () => {
    const closedMenu = ReactShallowRenderer.createRenderer().render(<CheeseburgerMenu isOpen={false} closeCallback={emptyFunc}>content</CheeseburgerMenu>)
    expect(closedMenu).toMatchSnapshot()
  })

  it('matches snapshot when open', () => {
    const openMenu = ReactShallowRenderer.createRenderer().render(<CheeseburgerMenu isOpen={true} closeCallback={emptyFunc}>content</CheeseburgerMenu>)
    expect(openMenu).toMatchSnapshot()
  })
})
