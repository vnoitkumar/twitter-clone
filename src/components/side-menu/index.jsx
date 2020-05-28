import React from 'react';
import { createUseStyles } from 'react-jss';

import Logo from '../logo';
import MenuItems from './MenuItems';
import TweetButton from '../tweet-button';

const useStyles = createUseStyles({
  side_menu: { width: '20%' }
});

function SideMenu() {
  const { side_menu } = useStyles();

  return (
    <header className={side_menu}>
      <Logo />
      <MenuItems />
      <TweetButton />
    </header>
  );
}

export default SideMenu;
