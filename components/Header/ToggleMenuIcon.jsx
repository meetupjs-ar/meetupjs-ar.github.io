import PropTypes from 'prop-types';
import React from 'react';
import './ToggleMenuIcon.css';

const ToggleMenuIcon = ({ icon, toogleMenu, visible }) => {
  if (!visible) return null;

  return (
    <button className="select-none" onClick={toogleMenu} type="button">
      <box-icon name={icon} />
      <span className="visually-hidden">Menu</span>
    </button>
  );
};

ToggleMenuIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  toogleMenu: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

export default ToggleMenuIcon;
