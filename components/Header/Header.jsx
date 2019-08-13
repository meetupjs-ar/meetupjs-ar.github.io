import classnames from 'classnames';
import Link from 'next/link';
import React, { Component } from 'react';
import Icon from '../Utils/Icon';
import Menu from './Menu';
import ToogleMenuIcon from './ToggleMenuIcon';

class Header extends Component {
  state = {
    isMenuOpen: false
  };

  closeMenu = () => this.setState({ isMenuOpen: false });

  toogleMenu = () => this.setState(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }));

  render() {
    const { isMenuOpen } = this.state;

    return (
      <header className="bg-secondary-light border-b-2 border-black-10 fixed left-0 py-2 right-0 top-0 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" passHref>
              <a href="#!" onClick={this.closeMenu}>
                <Icon name="isotype" height="h-50-px" width="w-50-px" />
              </a>
            </Link>
            <ToogleMenuIcon
              visible
              icon={isMenuOpen ? 'close' : 'menu'}
              alt={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              toogleMenu={this.toogleMenu}
            />
          </div>
          <div className={classnames([isMenuOpen ? 'block' : 'hidden', '', 'fade-in my-8'])}>
            <Menu toogleMenu={this.toogleMenu} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
