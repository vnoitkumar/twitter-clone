import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import MenuIcon from './MenuIcon';
import { ThemeContext, PrimaryColorContext } from '../../context';

function MenuItem({
  name = '',
  notificationCount = 0,
  isNewTweetAvailable = false
}) {
  const { theme } = useContext(ThemeContext);
  const { primaryColor } = useContext(PrimaryColorContext);

  const useStyles = createUseStyles({
    wrapper: {
      textDecoration: 'none',
      width: '100%',
      height: 'fit-content',
      display: 'inline-block',
      marginBottom: '8px',
      '&.active  svg': {
        fill: primaryColor.color
      },
      '&.active  $menu_text': {
        color: primaryColor.color
      },
      '&:hover $item': {
        backgroundColor: primaryColor.background
      },
      '&:hover $menu_text': {
        color: primaryColor.color
      },
      '&:hover svg': {
        fill: primaryColor.color
      }
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      width: 'fit-content',
      borderRadius: '9999px',
      transitionDuration: '0.2s',
      transitionProperty: 'background-color'
    },
    menu_text: {
      color: ({ theme }) => theme.color,
      marginRight: '15px',
      marginLeft: '20px',
      fontSize: '1.25rem',
      fontWeight: '700',
      textTransform: 'capitalize'
    }
  });

  const { wrapper, item, menu_text } = useStyles({ theme });

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

export default MenuItem;
