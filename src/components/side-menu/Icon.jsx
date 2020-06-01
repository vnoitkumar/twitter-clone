import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from '../../context/theme-context';

import {
  HomeIcon,
  MoreIcon,
  ListsIcon,
  ProfileIcon,
  ExploreIcon,
  MessagesIcon,
  BookmarksIcon,
  NotificationsIcon
} from '../icons';

export default function Icon({ name }) {
  const { theme } = useContext(ThemeContext);
  const useStyles = createUseStyles({
    icon: {
      fill: theme.color,
      height: '1.75rem'
    }
  });

  const { icon } = useStyles();
  const { pathname } = useLocation();

  const menuIcons = {
    more: <MoreIcon className={icon} />,
    home: <HomeIcon isActive={pathname === `/${name}`} className={icon} />,
    lists: <ListsIcon isActive={pathname === `/${name}`} className={icon} />,
    profile: (
      <ProfileIcon isActive={pathname === `/${name}`} className={icon} />
    ),
    explore: (
      <ExploreIcon isActive={pathname === `/${name}`} className={icon} />
    ),
    messages: (
      <MessagesIcon isActive={pathname === `/${name}`} className={icon} />
    ),
    bookmarks: (
      <BookmarksIcon isActive={pathname === `/${name}`} className={icon} />
    ),
    notifications: (
      <NotificationsIcon isActive={pathname === `/${name}`} className={icon} />
    )
  };

  return menuIcons[name];
}
