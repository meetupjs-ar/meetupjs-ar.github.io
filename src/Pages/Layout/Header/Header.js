import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { NavLink } from 'react-router-dom';
import Menu from './Components/Menu';
import ToogleMenuIcon from './Components/ToggleMenuIcon';
import * as styles from './css/Header.module.css';
import isotipo from './images/isotipo.svg';

class Header extends Component {
  state = {
    isMenuOpen: false
  };

  toogleMenu = (openMenu) => {
    this.setState({
      isMenuOpen: openMenu
    });
  };

  render() {
    const { isMenuOpen } = this.state;

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
              <ToogleMenuIcon
                visible={!isMenuOpen}
                icon="icon-ion-md-menu"
                toogleMenu={() => this.toogleMenu(true)}
              />
              <ToogleMenuIcon
                visible={isMenuOpen}
                icon="icon-ion-md-close"
                toogleMenu={() => this.toogleMenu(false)}
              />
            </div>
          </div>
          <div className={`${isMenuOpen ? 'db' : 'dn'} fade-in mv4`}>
            <Menu toogleMenu={() => this.toogleMenu(false)} />
            <p className="f6 flex items-center justify-end mv0 tr">
              <span className="black-30">Version {process.env.REACT_APP_VERSION}</span>
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
