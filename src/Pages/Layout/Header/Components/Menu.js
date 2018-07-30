import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import MenuItem from './MenuItem';

class Menu extends PureComponent {
  static props = {
    toogleMenu: PropTypes.func.isRequired
  };

  render() {
    const { toogleMenu } = this.props;

    return (
      <ul className="list mv4 pl0">
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
  }
}

export default Menu;
