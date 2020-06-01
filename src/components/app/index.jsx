// External imports
import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

// Internal imports
import SideMenu from '../side-menu';
import { themes } from '../../configs';
import { ThemeContext } from '../../context/theme-context';

import {
  getLocalStorageValue,
  setLocalStorageValue
} from '../../utils/LocalStorageUtility';

function App() {
  let userPreferredThemeName = getLocalStorageValue('theme');

  if (!userPreferredThemeName) {
    const defaultThemeName = 'default';
    setLocalStorageValue('theme', defaultThemeName);
    userPreferredThemeName = defaultThemeName;
  }

  const userPreferredTheme = themes['default'];

  const [theme, setTheme] = useState(userPreferredTheme);

  function changeTheme(themeName) {
    const theme = !!themes[themeName] ? themes[themeName] : themes.default;
    setTheme(theme);
  }

  const _theme = {
    theme,
    changeTheme
  };

  const useStyles = createUseStyles({
    '@global': {
      ':root': {
        fontSize: '15px'
      },
      body: {
        color: theme.color,
        backgroundColor: theme.background
      }
    },
    container: {
      maxWidth: '1240px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'space-between'
    },
    main: {
      width: '50%'
    },
    side_bar_right: {
      width: '30%'
    }
  });

  const { container, main, side_bar_right } = useStyles();

  return (
    <ThemeContext.Provider value={_theme}>
      <div className={container}>
        <SideMenu />
        <main className={main}></main>
        <aside className={side_bar_right}></aside>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
