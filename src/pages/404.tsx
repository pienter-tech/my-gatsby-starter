import React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => {
  return (
    <>
      <h1>Looks like something went wrong here...</h1>
      <p>
        Go to the index page{' '}
        <Link to="/" className="u-txt-accent">
          here.
        </Link>
      </p>
    </>
  );
};

export default NotFoundPage;
