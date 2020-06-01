import { createContext } from 'react';
import { primaryColors } from '../configs';

const defaultValue = {
  primaryColor: primaryColors.blue,
  changePrimaryColor: () => {}
};

export default createContext(defaultValue);
