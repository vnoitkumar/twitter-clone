import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

import { LogoIcon } from '../icons';
import { ThemeContext } from '../../context';

function Logo({ brandName = 'Twitter', path = '/home' }) {
  const { theme } = useContext(ThemeContext);
  const useStyles = createUseStyles({
    wrapper: { margin: '2px 0', display: 'inline-flex' },
    link: {
      display: 'inline-block',
      padding: '10px',
      borderRadius: '9999px',
      '&:hover': {
        backgroundColor: 'rgba(29, 161, 242, 0.1)'
      }
    },
    logo: {
      fill: ({ theme }) => theme.logoFill,
      height: '2rem'
    }
  });
  const { wrapper, link, logo } = useStyles({ theme });

  return (
    <span className={wrapper}>
      <Link className={link} to={path} aria-label={brandName} role='button'>
        <LogoIcon className={logo} />
      </Link>
    </span>
  );
}

export default Logo;
