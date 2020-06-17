import classnames from 'classnames';
import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Utils/Icon';
import './MenuItem.css';

const MenuItem = ({ icon, router, text, toogleMenu, url }) => (
  <li className="py-2">
    <Link href={url} passHref>
      <a
        href="#!"
        className={classnames([
          router.pathname === url ? 'current-page' : '',
          'flex items-center justify-end relative',
        ])}
        onClick={toogleMenu}
      >
        <span className="mr-4">{text}</span>
        <Icon name={icon} />
      </a>
    </Link>
  </li>
);

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired,
  toogleMenu: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default withRouter(MenuItem);
