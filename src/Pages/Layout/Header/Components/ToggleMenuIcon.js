import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

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
      <span className="f30 grow nr3 ph3 pointer tc w30" onClick={toogleMenu}>
        <box-icon name={icon} />
      </span>
    );
  }
}

export default ToggleMenuIcon;
