import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../Utils/Icon';
import './ToggleMenuIcon.css';

const ToggleMenuIcon = ({ icon, toogleMenu, visible }) => {
  if (!visible) return null;

  return (
    <button className="select-none" onClick={toogleMenu} type="button">
      <Icon name={icon} />
      <span className="visually-hidden">Menú</span>
    </button>
  );
};

ToggleMenuIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  toogleMenu: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

export default ToggleMenuIcon;
