import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';

import { themes } from '../../configs';
import { ThemeContext } from '../../context';
import { getLocalStorageValue } from '../../utils/localStorageUtility';

function Background() {
  const { changeTheme } = useContext(ThemeContext);

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
      userSelect: 'none'
    }
  });

  const { radio_btn_wrapper, radio_btn, label, input } = useStyles();

  function handelChangeTheme(event) {
    changeTheme(event.target.value);
  }

  return (
    <div className={radio_btn_wrapper}>
      {Object.keys(themes).map(function (themeName) {
        return (
          <div className={radio_btn} key={themeName}>
            <input
              className={input}
              type='radio'
              id={`theme_${themeName}`}
              name='theme'
              value={themeName}
              checked={themeName === getLocalStorageValue('theme-name')}
              onChange={handelChangeTheme}
            />
            <label className={label} htmlFor={`theme_${themeName}`}>
              {themes[themeName].name}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default Background;
