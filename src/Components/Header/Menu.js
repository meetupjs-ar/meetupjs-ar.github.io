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
        <MenuItem text="Página Principal" icon="icon-home" url="/" toogleMenu={toogleMenu} />
        <MenuItem text="Blog" icon="icon-paper" url="/blog.html" toogleMenu={toogleMenu} />
        <MenuItem
          text="Calendario de Eventos"
          icon="icon-calendar"
          url="/calendario.html"
          toogleMenu={toogleMenu}
        />
        <MenuItem
          text="Código de Conducta"
          icon="icon-people"
          url="/coc.html"
          fixIcon
          toogleMenu={toogleMenu}
        />
      </ul>
    );
  }
}

export default Menu;
