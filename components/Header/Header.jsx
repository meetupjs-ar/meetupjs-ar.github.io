import Link from 'next/link';
import React, { Component } from 'react';
import Menu from './Menu';
import ToggleDarkModeIcon from './ToggleDarkModeIcon';
import ToogleMenuIcon from './ToggleMenuIcon';

class Header extends Component {
  state = {
    isDarkModeEnabled: false,
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

  toggleDarkMode = () => {
    const { isDarkModeEnabled } = this.state;

    this.setState(
      {
        isDarkModeEnabled: !isDarkModeEnabled
      },
      () => {
        const { isDarkModeEnabled } = this.state;

        // TODO: puedo lograr esto de una manera mejor? Modificar un elemento del DOM
        // que no solo está fuera de mi componente sino que fuera del root de la app
        document.querySelector('body').classList[isDarkModeEnabled ? 'add' : 'remove']('dark-mode');
      }
    );
  };

  render() {
    const { isDarkModeEnabled, isMenuOpen } = this.state;

    return (
      <header className="b--black-10 bb bg-washed-yellow bw1 fixed left-0 pv2 right-0 top-0 z-3">
        <div className="center mw9 ph3">
          <div className="flex items-center justify-between">
            <Link href="/" passHref>
              <a href="#!" onClick={this.closeMenu} title="Hola JavaScripter! 😎">
                <img src={require('./isotipo.svg')} alt="Logo" className="db h50 v-btm w50" />
              </a>
            </Link>
            <div className="flex items-center">
              <ToggleDarkModeIcon
                visible={!isDarkModeEnabled}
                icon="moon"
                toogleDarkMode={this.toggleDarkMode}
              />
              <ToggleDarkModeIcon
                visible={isDarkModeEnabled}
                icon="sun"
                toogleDarkMode={this.toggleDarkMode}
              />
              <ToogleMenuIcon visible={!isMenuOpen} icon="menu" toogleMenu={this.openMenu} />
              <ToogleMenuIcon visible={isMenuOpen} icon="x" toogleMenu={this.closeMenu} />
            </div>
          </div>
          <div className={`${isMenuOpen ? 'db' : 'dn'} fade-in mv4`}>
            <Menu toogleMenu={this.closeMenu} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
