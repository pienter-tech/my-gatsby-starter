import React, { FunctionComponent, useContext } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import ThemeContext from '../contexts/ThemeContext';
import Logo from './logo';
import { useSiteMetadata } from '../hooks/use-site-metadata';

interface HeaderProps {
  className?: string;
}

const Header: FunctionComponent<HeaderProps> = ({ className }) => {
  const [{ color }] = useContext(ThemeContext);
  const { menuItems } = useSiteMetadata();

  return (
    <header
      className={classNames({
        [`${className}`]: className,
        'c-header': true,
        'c-header--dark': color === 'light',
      })}
    >
      <div className="c-header__logo">
        <Logo padding={2} />
      </div>
      <nav className="c-header__nav">
        {menuItems.map(({ link, name }) => (
          <Link key={name} className="c-header__nav-item" activeClassName="c-header__nav-item--active" to={link}>
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
