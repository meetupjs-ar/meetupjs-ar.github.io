import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import AsyncImage from '../Utils/AsyncImage';
import Container from '../Utils/Container';
import Metatags from '../Utils/Metatags';
import travolta from './images/travolta.gif';
import NotFoundPageMetatags from './NotFoundPageMetatags';

class NotFoundPage extends PureComponent {
  render() {
    return (
      <Container>
        <Metatags metatags={NotFoundPageMetatags} />
        <div className="tc">
          <h1 className="mv0">¡Ups!, lo que viniste a buscar no está acá.</h1>
          <AsyncImage src={travolta} alt="John Travolta" className="db center h5 mv4" />
          <NavLink
            to="/"
            className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 dib f6 grow link ph3 pv2 ttu"
          >
            <span>Volver a la página principal</span>
          </NavLink>
        </div>
      </Container>
    );
  }
}

export default NotFoundPage;
