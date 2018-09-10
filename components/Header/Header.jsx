import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import css from 'styled-jsx/css';
import Menu from './Menu';
import ToogleMenuIcon from './ToggleMenuIcon';

const isotipoStyles = css`
  .h50 {
    height: 50px;
  }
`;

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
      <header className="b--black-10 bb bg-washed-yellow bw1 fixed left-0 pv2 right-0 top-0 z-1">
        <style jsx>{isotipoStyles}</style>
        <div className="center mw9 ph3">
          <div className="flex items-center justify-between">
            <Link href="/" passHref>
              <a href="#!" onClick={this.closeMenu}>
                <img src="/static/Header/isotipo.svg" alt="Logo" className="db h50 v-btm" />
              </a>
            </Link>
            <div className="flex items-center">
              {router.pathname === '/calendario' && (
                <Link href="https://goo.gl/forms/vzPGDccvtYcOsdEi1" passHref>
                  <a
                    href="#!"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 f7 f6-ns grow link mr3 ph3 pv2 ttu"
                  >
                    Agregar un evento
                  </a>
                </Link>
              )}
              <ToogleMenuIcon visible={!isMenuOpen} icon="menu" toogleMenu={this.openMenu} />
              <ToogleMenuIcon visible={isMenuOpen} icon="x" toogleMenu={this.closeMenu} />
            </div>
          </div>
          <div className={`${isMenuOpen ? 'db' : 'dn'} fade-in mv4`}>
            <Menu toogleMenu={this.closeMenu} />
            <p className="f6 flex items-center justify-end mv0 pr1 tr">
              <span className="black-30">
                Version
                {process.env.REACT_APP_VERSION}
              </span>
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
