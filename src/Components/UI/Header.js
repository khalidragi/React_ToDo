import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = () => {
  return (
    <Menu inverted>
      <Menu.Item header>
        <a href='/'>ToDo List</a>
      </Menu.Item>
      />
      <Menu.Item position='right'>
        <a href='/about'>About</a>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
