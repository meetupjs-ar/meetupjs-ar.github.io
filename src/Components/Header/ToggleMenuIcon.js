import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import * as styles from './ToogleMenuIcon.module.css';

class ToggleMenuIcon extends PureComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    toogleMenu: PropTypes.func.isRequired
  };

  render() {
    const { icon, toogleMenu } = this.props;

    return (
      <span
        className={`${icon} ${styles.userSelectNone} f30 border-box grow nr3 ph3 pointer pv2`}
        onClick={toogleMenu}
      />
    );
  }
}

export default ToggleMenuIcon;
