import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from '../css/MenuItem.module.css';

class MenuItem extends PureComponent {
  static props = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    toogleMenu: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
  };

  render() {
    const { icon, text, toogleMenu, url } = this.props;

    return (
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
  }
}

export default MenuItem;
