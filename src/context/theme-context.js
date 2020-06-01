import { createContext } from 'react';
import { themes } from '../configs';

const defaultValue = {
  theme: themes.default,
  changeTheme: () => {}
};

export default createContext(defaultValue);
