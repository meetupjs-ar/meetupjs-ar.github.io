import PropTypes from 'prop-types';
import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ toogleMenu }) => (
  <ul className="my-4">
    <MenuItem text="Página Principal" icon="home" url="/" toogleMenu={toogleMenu} />
    <MenuItem text="Blog" icon="blog" url="/blog.html" toogleMenu={toogleMenu} />
    <MenuItem
      text="Calendario de Eventos"
      icon="calendar"
      url="/calendario.html"
      toogleMenu={toogleMenu}
    />
    <MenuItem text="Código de Conducta" icon="handshake" url="/coc.html" toogleMenu={toogleMenu} />
    <MenuItem
      text="Estado de los servicios"
      icon="services"
      url="/servicios.html"
      toogleMenu={toogleMenu}
    />
  </ul>
);

Menu.propTypes = {
  toogleMenu: PropTypes.func.isRequired
};

export default Menu;
