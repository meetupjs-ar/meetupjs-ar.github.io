import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from './MenuItem.module.css';

class MenuItem extends PureComponent {
  static props = {
    fixIcon: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    toogleMenu: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
  };

  render() {
    const { fixIcon, icon, text, toogleMenu, url } = this.props;

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
          <span className={`${fixIcon ? 'nr1 pl1' : ''} ${icon} ${styles.w30} f30 ml3 silver tr`} />
        </NavLink>
      </li>
    );
  }
}

export default MenuItem;
