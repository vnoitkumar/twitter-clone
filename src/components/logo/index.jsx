import React from 'react';
import { createUseStyles } from 'react-jss';
import { LogoIcon } from '../icons';

const useStyles = createUseStyles({
  wrapper: { margin: '2px 0', display: 'inline-flex' },
  link: {
    display: 'inline-block',
    padding: '10px',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: 'rgba(29, 161, 242, 0.1)'
    }
  },
  logo: {
    fill: '#fff',
    height: '2rem'
  }
});

export default function Logo({ brandName = 'Twitter', path = '/' }) {
  const { wrapper, link, logo } = useStyles();

  return (
    <span className={wrapper}>
      <a className={link} href={path} aria-label={brandName} role='button'>
        <LogoIcon className={logo} />
      </a>
    </span>
  );
}
