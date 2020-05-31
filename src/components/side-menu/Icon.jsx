import React from 'react';
import { createUseStyles } from 'react-jss';
import { useLocation } from 'react-router-dom';
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

const useStyles = createUseStyles({
  icon: {
    fill: '#fff',
    height: '1.75rem'
  }
});

export default function Icon({ name }) {
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
