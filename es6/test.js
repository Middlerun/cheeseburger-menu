import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

import CheeseburgerMenu from './index'

const emptyFunc = () => null

describe('<CheeseburgerMenu/>', () => {
  it('matches snapshot when closed', () => {
    const closedMenu = shallow(<CheeseburgerMenu isOpen={false} closeCallback={emptyFunc}/>)
    expect(toJson(closedMenu)).toMatchSnapshot()
  })

  it('matches snapshot when open', () => {
    const openMenu = shallow(<CheeseburgerMenu isOpen={true} closeCallback={emptyFunc}/>)
    expect(toJson(openMenu)).toMatchSnapshot()
  })
})