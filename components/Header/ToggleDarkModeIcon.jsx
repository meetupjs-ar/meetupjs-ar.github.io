import PropTypes from 'prop-types';
import React from 'react';

const ToggleDarkModeIcon = ({ icon, toogleDarkMode, visible }) => {
  if (!visible) return null;

  const title = `Habilitar tema ${icon === 'sun' ? 'claro' : 'oscuro'}`;

  return (
    <button
      className="b--transparent bg-transparent f30 grow mr3 pa0 pointer tc user-select-none w30"
      onClick={toogleDarkMode}
      type="button"
      title={title}
    >
      <box-icon name={icon} type="solid" />
      <span className="visually-hidden">
        <span>{title}</span>
      </span>
    </button>
  );
};

ToggleDarkModeIcon.propTypes = {
  icon: PropTypes.oneOf(['sun', 'moon']).isRequired,
  toogleDarkMode: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
};

export default ToggleDarkModeIcon;
