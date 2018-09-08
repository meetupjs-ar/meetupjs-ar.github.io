import PropTypes from 'prop-types';
import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ toogleMenu }) => (
  <ul className="list mv4 pl0">
    <MenuItem text="Página Principal" icon="home-alt" url="/" toogleMenu={toogleMenu} />
    <MenuItem text="Blog" icon="news" url="/blog" toogleMenu={toogleMenu} />
    <MenuItem
      text="Calendario de Eventos"
      icon="calendar"
      url="/calendario"
      toogleMenu={toogleMenu}
    />
    <MenuItem text="Código de Conducta" icon="pen" url="/coc" toogleMenu={toogleMenu} />
    <MenuItem text="Estado de los servicios" icon="bot" url="/servicios" toogleMenu={toogleMenu} />
  </ul>
);

Menu.propTypes = {
  toogleMenu: PropTypes.func.isRequired
};

export default Menu;
