import { createContext } from 'react';
import { themes } from '../configs';

const defaultValue = {
  theme: themes.default,
  changeTheme: () => {}
};

export const ThemeContext = createContext(defaultValue);
