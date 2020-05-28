import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  tweet_btn: {
    marginTop: '2px',
    backgroundColor: 'rgb(29, 161, 242)',
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

export default function TweetButton() {
  const { tweet_btn } = useStyles();

  return <button className={tweet_btn}>Tweet</button>;
}
