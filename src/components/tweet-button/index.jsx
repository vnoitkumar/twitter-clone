import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';

import { PrimaryColorContext } from '../../context';

function TweetButton() {
  const { primaryColor } = useContext(PrimaryColorContext);
  const useStyles = createUseStyles({
    tweet_btn: {
      marginTop: '2px',
      backgroundColor: primaryColor.color,
      boxShadow: 'rgba(0, 0, 0, 0.08) 0px 8px 28px',
      border: 'none',
      color: '#fff',
      padding: '16px',
      width: '85%',
      fontWeight: '700',
      outline: '0',
      borderRadius: '9999px'
    }
  });
  const { tweet_btn } = useStyles();

  return <button className={tweet_btn}>Tweet</button>;
}

export default TweetButton;
