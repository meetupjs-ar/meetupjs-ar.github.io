import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import AsyncImage from '../../Utils/AsyncImage';
import Menu from './Components/Menu';
import ToogleMenuIcon from './Components/ToggleMenuIcon';
import * as styles from './css/Header.module.css';
import isotipo from './images/isotipo.svg';

class Header extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };

  state = {
    isMenuOpen: false
  };

  toogleMenu = (openMenu) => {
    this.setState({
      isMenuOpen: openMenu
    });
  };

  render() {
    const { location } = this.props;
    const { pathname } = location;
    const { isMenuOpen } = this.state;

    return (
      <header className="b--black-10 bb bg-washed-yellow bw1 fixed left-0 pv2 right-0 top-0 z-1">
        <div className="center mw9 ph3">
          <div className="flex items-center justify-between">
            <NavLink to="/" onClick={() => this.toogleMenu(false)}>
              <AsyncImage src={isotipo} alt="isotipo" className={`${styles.h50} grow v-btm`} />
            </NavLink>
            <div className="flex items-center">
              {pathname === '/calendario.html' && (
                <a
                  href="https://goo.gl/forms/vzPGDccvtYcOsdEi1"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 f7 f6-ns grow link ph3 pv2 ttu"
                >
                  Agregar un evento
                </a>
              )}
              <ToogleMenuIcon
                visible={!isMenuOpen}
                icon="menu"
                toogleMenu={() => this.toogleMenu(true)}
              />
              <ToogleMenuIcon
                visible={isMenuOpen}
                icon="x"
                toogleMenu={() => this.toogleMenu(false)}
              />
            </div>
          </div>
          <div className={`${isMenuOpen ? 'db' : 'dn'} fade-in mv4`}>
            <Menu toogleMenu={() => this.toogleMenu(false)} />
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
