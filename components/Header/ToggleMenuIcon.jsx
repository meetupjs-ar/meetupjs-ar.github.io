import PropTypes from 'prop-types';
import React from 'react';

const ToggleMenuIcon = ({ icon, toogleMenu, visible }) => {
  if (!visible) return null;

  const title = `${icon === 'menu' ? 'Abrir' : 'Cerrar'} menú`;

  return (
    <button
      className="b--transparent bg-transparent f30 grow pa0 pointer tc user-select-none w30"
      onClick={toogleMenu}
      type="button"
      title={title}
    >
      <box-icon name={icon} />
      <span className="visually-hidden">{title}</span>
    </button>
  );
};

ToggleMenuIcon.propTypes = {
  icon: PropTypes.oneOf(['menu', 'x']).isRequired,
  toogleMenu: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

export default ToggleMenuIcon;
