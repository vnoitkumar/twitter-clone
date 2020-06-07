import { createContext } from 'react';

import { primaryColors } from '../configs';

const defaultValue = {
  primaryColor: primaryColors.blue,
  changePrimaryColor: () => {}
};

export function getPrimaryColor(primaryColorName) {
  if (primaryColors.hasOwnProperty(primaryColorName)) {
    return primaryColors[primaryColorName];
  }
  return primaryColors.default;
}

export default createContext(defaultValue);
