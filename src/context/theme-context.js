import { createContext } from 'react';

import { themes } from '../configs';

const defaultValue = {
  theme: themes.default,
  changeTheme: () => {}
};

export function getTheme(themeName) {
  if (themes.hasOwnProperty(themeName)) {
    return themes[themeName];
  }
  return themes.default;
}

export default createContext(defaultValue);
