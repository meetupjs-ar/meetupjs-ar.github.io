import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from 'styled-jsx/css';
import Menu from './Menu';
import ToogleMenuIcon from './ToggleMenuIcon';

const isotipoStyles = css`
  .h50 {
    height: 50px;
  }
`;

class Header extends Component {
  static props = {
    router: PropTypes.object.isRequired
  };

  state = {
    isMenuOpen: false
  };

  toogleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  };

  render() {
    const { isMenuOpen } = this.state;
    const { pathname } = this.props.router;

    return (
      <header className="b--black-10 bb bg-washed-yellow bw1 fixed left-0 pv2 right-0 top-0 z-1">
        <style jsx>{isotipoStyles}</style>
        <div className="center mw9 ph3">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a>
                <img src="/static/Header/isotipo.svg" alt="Logo" className="db h50 v-btm" />
              </a>
            </Link>
            <div className="flex items-center">
              {pathname === '/calendario.html' && (
                <Link href="https://goo.gl/forms/vzPGDccvtYcOsdEi1">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 f7 f6-ns grow link ph3 pv2 ttu"
                  >
                    Agregar un evento
                  </a>
                </Link>
              )}
              <ToogleMenuIcon visible={!isMenuOpen} icon="menu" toogleMenu={this.toogleMenu} />
              <ToogleMenuIcon visible={isMenuOpen} icon="x" toogleMenu={this.toogleMenu} />
            </div>
          </div>
          <div className={`${isMenuOpen ? 'db' : 'dn'} fade-in mv4`}>
            <Menu toogleMenu={this.toogleMenu} />
            <p className="f6 flex items-center justify-end mv0 pr1 tr">
              <span className="black-30">Version {process.env.REACT_APP_VERSION}</span>
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
