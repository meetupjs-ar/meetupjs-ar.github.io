import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { NavLink } from 'react-router-dom';
import * as styles from './Header.module.css';
import isotipo from './isotipo.svg';
import MenuItem from './MenuItem';
import ToogleMenuIcon from './ToggleMenuIcon';

class Header extends Component {
  state = {
    menuOpen: false
  };

  toogleMenu = (show) => {
    this.setState({
      menuOpen: show
    });
  };

  render() {
    const { menuOpen } = this.state;

    return (
      <header className="b--black-10 bb bg-washed-yellow bw1 fixed left-0 pv2 right-0 top-0 z-1">
        <div className="center mw9 ph3">
          <div className="flex items-center justify-between">
            <NavLink to="/" onClick={() => this.toogleMenu(false)}>
              <LazyLoad height="100%" once={true}>
                <img src={isotipo} alt="isotipo" className={`${styles.h50} grow v-btm`} />
              </LazyLoad>
            </NavLink>
            <div className="flex items-center">
              {!menuOpen && (
                <ToogleMenuIcon icon="icon-nav" toogleMenu={() => this.toogleMenu(true)} />
              )}
              {menuOpen && (
                <ToogleMenuIcon icon="icon-close" toogleMenu={() => this.toogleMenu(false)} />
              )}
            </div>
          </div>
          {this.state.menuOpen && (
            <div id="menu" className="mv4">
              <ul className="list mv4 pl0">
                <MenuItem
                  text="Página Principal"
                  icon="icon-home"
                  url="/"
                  toogleMenu={() => this.toogleMenu(false)}
                />
                <MenuItem
                  text="Blog"
                  icon="icon-paper"
                  url="/blog.html"
                  toogleMenu={() => this.toogleMenu(false)}
                />
                <MenuItem
                  text="Calendario de Eventos"
                  icon="icon-calendar"
                  url="/calendario.html"
                  toogleMenu={() => this.toogleMenu(false)}
                />
                <MenuItem
                  text="Código de Conducta"
                  icon="icon-people"
                  url="/coc.html"
                  fixIcon
                  toogleMenu={() => this.toogleMenu(false)}
                />
              </ul>
              <p className="db f6 flex items-center justify-end mv0 tr">
                <span className="black-30">Version {process.env.REACT_APP_VERSION}</span>
              </p>
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
