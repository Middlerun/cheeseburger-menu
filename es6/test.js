import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'

const renderer = new ReactShallowRenderer()

import CheeseburgerMenu from './index'

const emptyFunc = () => null

describe('<CheeseburgerMenu/>', () => {
  it('matches snapshot when closed', () => {
    const closedMenu = renderer.render(<CheeseburgerMenu isOpen={false} closeCallback={emptyFunc}/>)
    expect(closedMenu).toMatchSnapshot()
  })

  it('matches snapshot when open', () => {
    const openMenu = renderer.render(<CheeseburgerMenu isOpen={true} closeCallback={emptyFunc}/>)
    expect(openMenu).toMatchSnapshot()
  })
})
