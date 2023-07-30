import React, { useCallback, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import CheeseburgerMenu from './index'

const meta: Meta<typeof MenuContainer> = {
  title: 'CheeseburgerMenu',
  component: MenuContainer,
  parameters: {
    // controls: { expanded: true },
  },
}

export default meta

type Story = StoryObj<typeof MenuContainer>

export const Normal: Story = {
  args: {},
}
export const WithSkew: Story = {
  args: {
    skewY: -5,
    bottomOffset: -30,
  },
}

type Props = Omit<React.ComponentProps<typeof CheeseburgerMenu>, 'isOpen' | 'closeCallback' | 'children'>

const items: Array<number> = []
for (let i = 1; i <= 100; i++) {
  items.push(i)
}

function MenuContainer(props: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = useCallback(() => setMenuOpen(true), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return <div className="menu">
    <CheeseburgerMenu isOpen={menuOpen} closeCallback={closeMenu} {...props}>
      <div className="my-menu-content">
        <ul>
          {items.map(i => <li key={i}>
            <a href={'/thing' + i} onClick={e => e.preventDefault()}>Menu item {i}</a>
          </li>)}
        </ul>
      </div>
    </CheeseburgerMenu>
    <button onClick={openMenu}>Open menu</button>
  </div>
}
