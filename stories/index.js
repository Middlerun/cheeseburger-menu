import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import CheeseburgerMenu from '../src/index'
import MenuContainer from './menu'

import { Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('CheeseburgerMenu', module)
  .add('open', () => <CheeseburgerMenu isOpen={true} closeCallback={action('close menu')}>
    <div className="my-menu-content">
      <ul>
        <li><a href="/thing1">Menu item 1</a></li>
        <li><a href="/thing2">Menu item 2</a></li>
      </ul>
    </div>
  </CheeseburgerMenu>)
  .add('openable and closable', () => <MenuContainer/>)
