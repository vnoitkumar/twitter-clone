import React from 'react';
import { createUseStyles } from 'react-jss';
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

  const menuIcons = {
    more: <MoreIcon className={icon} />,
    home: <HomeIcon isActive={true} className={icon} />,
    lists: <ListsIcon isActive={true} className={icon} />,
    profile: <ProfileIcon isActive={true} className={icon} />,
    explore: <ExploreIcon isActive={true} className={icon} />,
    messages: <MessagesIcon isActive={true} className={icon} />,
    bookmarks: <BookmarksIcon isActive={true} className={icon} />,
    notifications: <NotificationsIcon isActive={true} className={icon} />
  };

  return menuIcons[name];
}
