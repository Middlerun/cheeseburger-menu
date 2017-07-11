import React, {Component} from 'react'

import CheeseburgerMenu from '../index'

class MenuContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false,
    }
  }

  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  render() {
    return <div className="menu">
      <CheeseburgerMenu isOpen={this.state.menuOpen} closeCallback={this.closeMenu.bind(this)}>
        <div className="my-menu-content">
          <ul>
            <li><a href="/thing1">Menu item 1</a></li>
            <li><a href="/thing2">Menu item 2</a></li>
          </ul>
        </div>
      </CheeseburgerMenu>
      <button onClick={this.openMenu.bind(this)}>Open menu</button>
    </div>
  }
}

export default MenuContainer
