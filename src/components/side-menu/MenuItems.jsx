import React from 'react';
import { createUseStyles } from 'react-jss';

import MenuItem from './MenuItem';

const menus = [
  'home',
  'explore',
  'notifications',
  'messages',
  'bookmarks',
  'lists',
  'profile',
  'more'
];

const useStyles = createUseStyles({
  nav_bar: { margin: '3px 0px 5px 0px' }
});

function MenuItems() {
  const { nav_bar } = useStyles();

  const menuItems = menus.map(function (menuName) {
    return (
      <MenuItem
        key={menuName}
        name={menuName}
        notificationCount={
          (menuName === 'notifications' || menuName === 'messages') && 2
        } // Dummy condition
        isNewTweetAvailable={menuName === 'home'} // Dummy condition
      />
    );
  });

  return (
    <nav className={nav_bar} aria-label='Primary' role='navigation'>
      {menuItems}
    </nav>
  );
}

export default MenuItems;
