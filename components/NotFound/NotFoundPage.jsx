import React from 'react';
import Link from 'next/link';
import Container from 'utils/Container';

const NotFoundPage = () => (
  <Container>
    <div className="text-center">
      <h1 className="font-bold text-4xl">¡Ups!, lo que viniste a buscar no está acá.</h1>
      <img src="NotFound/travolta.gif" alt="John Travolta" className="block mx-auto h-48 my-8" />
      <Link href="/" passHref>
        <a
          href="#!"
          className="bg-secondary border-black-10 border-2 font-bold inline-block px-5 py-2 rounded text-sm uppercase"
        >
          <span>Volver a la página principal</span>
        </a>
      </Link>
    </div>
  </Container>
);

export default NotFoundPage;
