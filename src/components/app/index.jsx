import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

import Display from '../display';
import SideMenu from '../side-menu';

import {
  getTheme,
  ThemeContext,
  getPrimaryColor,
  PrimaryColorContext
} from '../../context';

import {
  getLocalStorageValue,
  setLocalStorageValue
} from '../../utils/localStorageUtility';

function App() {
  // ----- Theme Starts ----- //
  let userPreferredThemeName = getLocalStorageValue('theme-name');

  if (!userPreferredThemeName) {
    userPreferredThemeName = 'default';
    setLocalStorageValue('theme-name', userPreferredThemeName);
  }

  const userPreferredTheme = getTheme(userPreferredThemeName);
  const [theme, setTheme] = useState(userPreferredTheme);
  // ----- Theme Ends ----- //

  // ----- Primary Color Starts ----- //
  let userPreferredPrimaryColorName = getLocalStorageValue(
    'primary-color-name'
  );

  if (!userPreferredPrimaryColorName) {
    userPreferredPrimaryColorName = 'default';
    setLocalStorageValue('primary-color-name', userPreferredPrimaryColorName);
  }

  const userPreferredPrimaryColor = getPrimaryColor(
    userPreferredPrimaryColorName
  );
  const [primaryColor, setPrimaryColor] = useState(userPreferredPrimaryColor);
  // ----- Primary Color Ends ----- //

  // changeTheme context function
  function changeTheme(themeName = 'default') {
    setLocalStorageValue('theme-name', themeName);

    const theme = getTheme(themeName);
    setTheme(theme);
  }

  // changePrimaryColor context function
  function changePrimaryColor(primaryColorName = 'default') {
    setLocalStorageValue('primary-color-name', primaryColorName);

    const primaryColor = getPrimaryColor(primaryColorName);
    setPrimaryColor(primaryColor);
  }

  const useStyles = createUseStyles({
    '@global': {
      ':root': {
        fontSize: '15px'
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

  const { container, main, side_bar_right } = useStyles({ theme });

  useEffect(
    function onThemeChanged() {
      document.body.style = `color: ${theme.color}; background: ${theme.background};`;
    },
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <PrimaryColorContext.Provider
        value={{ primaryColor, changePrimaryColor }}
      >
        <Display />
        <div className={container}>
          <SideMenu />
          <main className={main}></main>
          <aside className={side_bar_right}></aside>
        </div>
      </PrimaryColorContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
