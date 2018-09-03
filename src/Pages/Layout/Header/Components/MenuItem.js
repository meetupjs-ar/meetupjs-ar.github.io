import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from '../css/MenuItem.module.css';

const MenuItem = ({ icon, text, toogleMenu, url }) => (
  <li className="pv2">
    <NavLink
      exact
      to={url}
      activeClassName={styles.currentPage}
      className="black-alternative flex items-center justify-end no-underline relative"
      onClick={toogleMenu}
    >
      <span>{text}</span>
      <span className="ml3 pt1 tc w30">
        <box-icon name={icon} color="#999" />
      </span>
    </NavLink>
  </li>
);

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  toogleMenu: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
};

export default MenuItem;
