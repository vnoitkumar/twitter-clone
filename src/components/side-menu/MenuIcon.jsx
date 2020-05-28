import React from 'react';
import { createUseStyles } from 'react-jss';
import Icon from './Icon';

const NOTIFICATION_COUNT_LIMIT = process.env.NOTIFICATION_COUNT_LIMIT || 9;

const useStyles = createUseStyles({
  wrapper: { position: 'relative' },
  new_tweet_indication: {
    position: 'absolute',
    top: '-4px',
    right: '1px',
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: 'rgb(29, 161, 242)'
  },
  count_indication: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '-6px',
    right: '-4px',
    position: 'absolute',
    height: '1.8em',
    minWidth: '1.8em',
    fontSize: '0.7rem',
    borderRadius: '50%',
    color: 'rgb(255, 255, 255)',
    border: '1px solid rgb(21, 32, 43)',
    backgroundColor: 'rgb(29, 161, 242)'
  }
});

export default function MenuIcon({
  name = '',
  notificationCount = 0,
  isNewTweetAvailable = false
}) {
  const { wrapper, new_tweet_indication, count_indication } = useStyles();

  return (
    <div className={wrapper}>
      <Icon name={name} />
      <NewTweetIndicator />
      <CountIndicator />
    </div>
  );

  function NewTweetIndicator() {
    return isNewTweetAvailable && <div className={new_tweet_indication}></div>;
  }

  function CountIndicator() {
    return (
      !!notificationCount && (
        <div className={count_indication}>
          {notificationCount <= NOTIFICATION_COUNT_LIMIT
            ? notificationCount
            : `${NOTIFICATION_COUNT_LIMIT}+`}
        </div>
      )
    );
  }
}
