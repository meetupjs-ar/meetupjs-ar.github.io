import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import * as styles from '../css/ToogleMenuIcon.module.css';

class ToggleMenuIcon extends PureComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    toogleMenu: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired
  };

  render() {
    const { icon, toogleMenu, visible } = this.props;

    if (!visible) return null;

    return (
      <span
        className={`${icon} ${styles.userSelectNone} f30 grow nr3 ph3 pointer pv2 tc w30`}
        onClick={toogleMenu}
      />
    );
  }
}

export default ToggleMenuIcon;
