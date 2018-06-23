import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';
import { NavLink } from 'react-router-dom';
import Body from '../Body/Body';
import Metatags from '../Metatags/Metatags';
import NotFoundPageMetatags from './NotFoundMetatags';
import travolta from './travolta.gif';

class NotFound extends PureComponent {
  render() {
    return (
      <Body>
        <Metatags metatags={NotFoundPageMetatags} />
        <div className="tc">
          <h1 className="mv0">Ups!, lo que viniste a buscar no está acá.</h1>
          <LazyLoad height="100%" once={true}>
            <img src={travolta} alt="travolta" className="db center h5 mv4" />
          </LazyLoad>
          <NavLink
            to="/"
            className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 dib f6 grow link ph3 pv2 ttu"
          >
            <span>Volver a la página principal</span>
          </NavLink>
        </div>
      </Body>
    );
  }
}

export default NotFound;
