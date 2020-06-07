import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';

import ModelWrapper from '../model-wrapper';
import Background from './Background';
import Color from './Color';
import { ThemeContext } from '../../context';

const useStyles = createUseStyles({
  model_container: {
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
  }
});

function Display() {
  const { theme } = useContext(ThemeContext);

  const { model_container } = useStyles({ theme });

  return (
    <ModelWrapper>
      <div className={model_container}>
        <Background />
        <br />
        <Color />
      </div>
    </ModelWrapper>
  );
}

export default Display;
