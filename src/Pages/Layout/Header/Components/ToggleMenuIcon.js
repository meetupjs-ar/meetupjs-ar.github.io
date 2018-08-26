import PropTypes from 'prop-types';
import React from 'react';

const ToggleMenuIcon = ({ icon, toogleMenu, visible }) => {
  if (!visible) return null;

  return (
    <span className="f30 grow nr3 ph3 pointer tc w30" onClick={toogleMenu}>
      <box-icon name={icon} />
    </span>
  );
};

ToggleMenuIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  toogleMenu: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

export default ToggleMenuIcon;
