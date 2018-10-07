import getConfig from 'next/config';
import Link from 'next/link';
import React, { Component } from 'react';
import Menu from './Menu';
import ToogleMenuIcon from './ToggleMenuIcon';

const { publicRuntimeConfig } = getConfig();

class Header extends Component {
  state = {
    isMenuOpen: false
  };

  closeMenu = () => {
    this.setState({
      isMenuOpen: false
    });
  };

  openMenu = () => {
    this.setState({
      isMenuOpen: true
    });
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <header className="b--black-10 bb bg-washed-yellow bw1 fixed left-0 pv2 right-0 top-0 z-3">
        <div className="center mw9 ph3">
          <div className="flex items-center justify-between">
            <Link href="/" passHref>
              <a href="#!" onClick={this.closeMenu}>
                <img src={require('./isotipo.svg')} alt="Logo" className="db h50 v-btm w50" />
              </a>
            </Link>
            <div className="flex items-center">
              <ToogleMenuIcon visible={!isMenuOpen} icon="menu" toogleMenu={this.openMenu} />
              <ToogleMenuIcon visible={isMenuOpen} icon="x" toogleMenu={this.closeMenu} />
            </div>
          </div>
          <div className={`${isMenuOpen ? 'db' : 'dn'} fade-in mv4`}>
            <Menu toogleMenu={this.closeMenu} />
            <p className="f6 flex items-center justify-end mv0 pr1 tr">
              <span className="black-50 mr1">Version</span>
              <span className="black-50">{publicRuntimeConfig.REACT_APP_VERSION}</span>
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
