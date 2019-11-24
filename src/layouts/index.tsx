import React, { FunctionComponent, useContext } from 'react';
import classNames from 'classnames';
import ThemeContext from '../contexts/ThemeContext';
import Header from '../components/header';

const Layout: FunctionComponent = ({ children }) => {
  const [{ color }] = useContext(ThemeContext);

  return (
    <React.StrictMode>
      <div
        className={classNames({
          'c-app-container': true,
          'c-app-container--dark': color === 'dark',
        })}
      >
        <Header className="c-app-container__header" />
        <main
          className={classNames({
            'c-app-container__main': true,
            'u-pad-y-2': true,
          })}
        >
          <section className="c-app-container__content">{children}</section>
        </main>
      </div>
    </React.StrictMode>
  );
};

export default Layout;
