import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import css from 'styled-jsx/css';

const menuItemStyles = css`
  .currentPage::after {
    color: #98d083;
    content: '•';
    font-weight: bold;
    right: -0.5rem;
    position: absolute;
  }
`;

const MenuItem = ({ icon, router, text, toogleMenu, url }) => (
  <li className="pv2">
    <style jsx>{menuItemStyles}</style>
    <Link href={url}>
      <a
        className={`${
          router.pathname === url ? 'currentPage' : ''
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
  router: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  toogleMenu: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
};

export default withRouter(MenuItem);
