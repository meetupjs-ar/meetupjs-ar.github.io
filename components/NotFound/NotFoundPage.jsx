import React from 'react';
import Link from 'next/link';
import Container from 'utils/Container';

const NotFoundPage = () => (
  <Container>
    <div className="tc">
      <h1 className="mv0">¡Ups!, lo que viniste a buscar no está acá.</h1>
      <img src="/static/NotFound/travolta.gif" alt="John Travolta" className="db center m-h5 mv4" />
      <Link href="/" passHref>
        <a
          href="#!"
          className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 dib f6 grow link ph3 pv2 ttu"
        >
          <span>Volver a la página principal</span>
        </a>
      </Link>
    </div>
  </Container>
);

export default NotFoundPage;
