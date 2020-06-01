import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import MenuIcon from './MenuIcon';
import { ThemeContext } from '../../context/theme-context';

export default function MenuItem({
  name = '',
  notificationCount = 0,
  isNewTweetAvailable = false
}) {
  const { theme } = useContext(ThemeContext);

  const useStyles = createUseStyles({
    wrapper: {
      textDecoration: 'none',
      width: '100%',
      height: 'fit-content',
      display: 'inline-block',
      marginBottom: '8px',
      '&.active  svg': {
        fill: '#1da1f2'
      },
      '&.active  $menu_text': {
        color: '#1da1f2'
      },
      '&:hover $item': {
        backgroundColor: 'rgba(29, 161, 242, 0.1)'
      },
      '&:hover $menu_text': {
        color: '#1da1f2'
      },
      '&:hover svg': {
        fill: '#1da1f2'
      }
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      width: 'fit-content',
      borderRadius: '9999px'
    },
    menu_text: {
      color: theme.color,
      marginRight: '15px',
      marginLeft: '20px',
      fontSize: '1.25rem',
      fontWeight: '700',
      textTransform: 'capitalize'
    }
  });

  const { wrapper, item, menu_text } = useStyles();

  return (
    <NavLink className={wrapper} to={`/${name}`} exact>
      <span className={item}>
        <MenuIcon
          name={name}
          notificationCount={notificationCount}
          isNewTweetAvailable={isNewTweetAvailable}
        />
        <span className={menu_text}>{name}</span>
      </span>
    </NavLink>
  );
}
