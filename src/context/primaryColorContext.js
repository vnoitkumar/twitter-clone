import { createContext } from 'react';
import { primaryColors } from '../configs';

export const PrimaryColorContext = createContext({
  primaryColor: primaryColors.blue,
  changePrimaryColor: () => {}
});
