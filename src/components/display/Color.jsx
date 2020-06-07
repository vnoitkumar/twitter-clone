import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';

import { primaryColors } from '../../configs';
import { PrimaryColorContext } from '../../context';
import { getLocalStorageValue } from '../../utils/localStorageUtility';

function Color() {
  const { changePrimaryColor } = useContext(PrimaryColorContext);

  const useStyles = createUseStyles({
    radio_btn_wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    radio_btn: {
      display: 'flex',
      alignItems: 'center'
    },
    input: {
      cursor: 'pointer'
    },
    label: {
      marginLeft: '5px',
      cursor: 'pointer',
      userSelect: 'none',
      textTransform: 'capitalize'
    }
  });

  const { radio_btn_wrapper, radio_btn, label, input } = useStyles();

  function handelColorTheme(event) {
    changePrimaryColor(event.target.value);
  }

  return (
    <div className={radio_btn_wrapper}>
      {Object.keys(primaryColors).map(function (primaryColorName) {
        return (
          <div className={radio_btn} key={primaryColorName}>
            <input
              className={input}
              type='radio'
              id={`color_${primaryColorName}`}
              name='color'
              value={primaryColorName}
              checked={
                primaryColorName === getLocalStorageValue('primary-color-name')
              }
              onChange={handelColorTheme}
            />
            <label className={label} htmlFor={`color_${primaryColorName}`}>
              {primaryColorName}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default Color;
