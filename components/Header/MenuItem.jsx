import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

const MenuItem = ({ icon, router, text, toogleMenu, url }) => (
  <li className="pv2">
    <Link href={url} passHref prefetch>
      <a
        href="#!"
        className={`${
          router.pathname === url ? 'current-page' : ''
        } black-alternative flex items-center justify-end no-underline relative`}
        onClick={toogleMenu}
      >
        <span>{text}</span>
        <span className="ml3 pt1 tc w30">
          <box-icon name={icon} color="#999" />
        </span>
      </a>
    </Link>
  </li>
);

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  text: PropTypes.string.isRequired,
  toogleMenu: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
};

export default withRouter(MenuItem);
