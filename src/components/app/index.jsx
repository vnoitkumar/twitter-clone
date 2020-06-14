import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import Display from '../display';
import SideMenu from '../side-menu';
import Home from '../home';

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

  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <PrimaryColorContext.Provider
        value={{ primaryColor, changePrimaryColor }}
      >
        {background ? (
          <Route exact path='/more' children={<Display />} />
        ) : location.pathname === '/more' ? (
          <Redirect to='/' />
        ) : null}

        <div className={container}>
          <SideMenu />
          <main className={main}>
            <Switch location={background || location}>
              <Route exact path='/' children={<Redirect to='/home' />} />
              <Route exact path='/home' children={<Home />} />
              <Route exact path='/explore' children={<h1>Explore</h1>} />
              <Route
                exact
                path='/notifications'
                children={<h1>Notifications</h1>}
              />
              <Route exact path='/messages' children={<h1>Messages</h1>} />
              <Route exact path='/bookmarks' children={<h1>Bookmarks</h1>} />
              <Route exact path='/lists' children={<h1>Lists</h1>} />
              <Route exact path='/profile' children={<h1>Profile</h1>} />
            </Switch>
          </main>
          <aside className={side_bar_right}></aside>
        </div>
      </PrimaryColorContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
