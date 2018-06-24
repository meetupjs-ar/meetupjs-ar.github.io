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
        <MenuItem
          text="Página Principal"
          icon="icon-ion-ios-home"
          url="/"
          toogleMenu={toogleMenu}
          fixIcon
        />
        <MenuItem text="Blog" icon="icon-ion-md-paper" url="/blog.html" toogleMenu={toogleMenu} />
        <MenuItem
          text="Calendario de Eventos"
          icon="icon-ion-md-calendar"
          url="/calendario.html"
          toogleMenu={toogleMenu}
        />
        <MenuItem
          text="Código de Conducta"
          icon="icon-ion-ios-people"
          url="/coc.html"
          toogleMenu={toogleMenu}
        />
        <MenuItem
          text="Estado de los servicios"
          icon="icon-ion-md-medkit"
          url="/servicios.html"
          toogleMenu={toogleMenu}
          fixIcon
        />
      </ul>
    );
  }
}

export default Menu;
