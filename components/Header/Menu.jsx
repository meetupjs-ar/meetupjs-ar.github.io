import PropTypes from 'prop-types';
import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ toogleMenu }) => (
  <ul className="my-4">
    <MenuItem text="Página Principal" icon="home-alt" url="/" toogleMenu={toogleMenu} />
    <MenuItem text="Blog" icon="news" url="/blog.html" toogleMenu={toogleMenu} />
    <MenuItem
      text="Calendario de Eventos"
      icon="calendar"
      url="/calendario.html"
      toogleMenu={toogleMenu}
    />
    <MenuItem text="Código de Conducta" icon="pen" url="/coc.html" toogleMenu={toogleMenu} />
    <MenuItem
      text="Estado de los servicios"
      icon="bot"
      url="/servicios.html"
      toogleMenu={toogleMenu}
    />
  </ul>
);

Menu.propTypes = {
  toogleMenu: PropTypes.func.isRequired
};

export default Menu;
