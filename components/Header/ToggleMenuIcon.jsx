import PropTypes from 'prop-types';
import React from 'react';

const ToggleMenuIcon = ({ icon, toogleMenu, value, visible }) => {
  if (!visible) return null;

  return (
    <button
      className="b--transparent bg-transparent f30 grow pa0 pointer tc user-select-none w30"
      onClick={toogleMenu}
      type="button"
      value={value}
    >
      <box-icon name={icon} />
    </button>
  );
};

ToggleMenuIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  toogleMenu: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired
};

export default ToggleMenuIcon;
