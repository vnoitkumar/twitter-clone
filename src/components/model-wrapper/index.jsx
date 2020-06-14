import React, { useContext, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useHistory } from 'react-router-dom';

import { ThemeContext } from '../../context';

const useStyles = createUseStyles({
  model_wrapper: {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    zIndex: '9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ({ theme }) => theme.modelWrapperBackground
  }
});

function ModelWrapper({ children }) {
  const { theme } = useContext(ThemeContext);
  const { model_wrapper } = useStyles({ theme });

  let history = useHistory();

  useEffect(
    function addEventListenerForEscKey() {
      function handelEscKeyPress(event) {
        if (event.keyCode === 27) {
          history.goBack();
        }
      }
      document.addEventListener('keydown', handelEscKeyPress, false);

      return function removeEventListenerForEscKey() {
        document.removeEventListener('keydown', handelEscKeyPress, false);
      };
    },
    [history]
  );

  function goBack(event) {
    event.stopPropagation();

    const target = event.target;
    if (target.id !== 'model_wrapper') {
      return; // child was clicked, ignore onClick
    }

    history.goBack();
  }

  return (
    <div onClick={goBack} className={model_wrapper} id='model_wrapper'>
      {children}
    </div>
  );
}

export default ModelWrapper;
