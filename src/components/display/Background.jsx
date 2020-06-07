import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';

import { ThemeContext } from '../../context';
import { themes } from '../../configs';

function Background() {
  const { theme, changeTheme } = useContext(ThemeContext);

  const useStyles = createUseStyles({
    display_container: {
      maxWidth: '80vw',
      maxHeight: '90vh',
      minWidth: '600px',
      borderRadius: '14px',
      overflowX: 'hidden',
      overflowY: 'auto',
      backgroundColor: ({ theme }) => theme.background,
      padding: '10px',
      height: '100px',
      margin: '5px'
    },
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

  const {
    radio_btn_wrapper,
    radio_btn,
    label,
    input,
    display_container
  } = useStyles({ theme });

  function handelChangeTheme(event) {
    changeTheme(event.target.value);
  }

  return (
    <div className={display_container}>
      <div className={radio_btn_wrapper}>
        {Object.keys(themes).map(function (themeName) {
          return (
            <div className={radio_btn} key={themeName}>
              <input
                className={input}
                type='radio'
                id={themeName}
                name='theme'
                value={themeName}
                onChange={handelChangeTheme}
              />
              <label className={label} htmlFor={themeName}>
                {themes[themeName].name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Background;
