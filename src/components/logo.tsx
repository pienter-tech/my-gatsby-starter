import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
// @ts-ignore
import LogoSvg from '../images/logo.svg';
// @ts-ignore
import LogoTxtSvg from '../images/logo-txt.svg';

interface LogoProps {
  padding?: 'none' | 0 | 1 | 2 | 3 | 4 | 5 | 6;
  color?: 'dark' | 'light';
}

const Logo: FunctionComponent<LogoProps> = ({ padding = 0, color = 'dark' }) => {
  return (
    <figure
      className={classNames({
        'c-logo': true,
        'c-logo--dark': color === 'dark',
        [`u-pad-${padding}`]: true,
      })}
    >
      <LogoSvg />
      <LogoTxtSvg />
    </figure>
  );
};

export default Logo;
