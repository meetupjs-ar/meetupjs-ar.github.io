import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class ToggleMenuIcon extends PureComponent {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    toogleMenu: PropTypes.func.isRequired
  };

  render() {
    const { icon, toogleMenu } = this.props;

    return (
      <span
        className={`${icon} f30 border-box grow nr3 ph3 pointer pv2 w50`}
        onClick={(event) => toogleMenu(event)}
      />
    );
  }
}

export default ToggleMenuIcon;
