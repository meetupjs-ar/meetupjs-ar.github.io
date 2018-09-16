import getConfig from 'next/config';
import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Menu from './Menu';
import ToogleMenuIcon from './ToggleMenuIcon';

const { publicRuntimeConfig } = getConfig();

class Header extends Component {
  static propTypes = {
    router: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired
  };

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
    const { router } = this.props;

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
              {router.pathname === '/calendario.html' && (
                <Link href="https://goo.gl/forms/vzPGDccvtYcOsdEi1" passHref>
                  <a
                    href="#!"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 f7 f6-ns grow no-underline mr3 ph3 pv2 ttu"
                  >
                    Agregar un evento
                  </a>
                </Link>
              )}
              <ToogleMenuIcon
                visible={!isMenuOpen}
                icon="menu"
                toogleMenu={this.openMenu}
                value="Abrir menú"
              />
              <ToogleMenuIcon
                visible={isMenuOpen}
                icon="x"
                toogleMenu={this.closeMenu}
                value="Cerrar menú"
              />
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

export default withRouter(Header);
