import React from 'react';
import HomePage from 'components/Home/HomePage';
import Head from 'next/head';

const description =
  'Grupo para debatir y compartir ideas en torno a Javascript (client-side y server-side), distintos frameworks, librerías y tecnologías en general. Un meetup mensual con charlas preparadas por miembros de la propia comunidad.';

export default () => (
  <React.Fragment>
    <Head>
      <title>️{process.env.REACT_APP_TITLE}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={process.env.REACT_APP_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={process.env.REACT_APP_TITLE} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={process.env.REACT_APP_SOCIAL_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@meetupjs_ar" />
      <meta name="twitter:creator" content="@meetupjs_ar" />
      <meta name="twitter:title" content={process.env.REACT_APP_TITLE} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={process.env.REACT_APP_SOCIAL_IMAGE} />
    </Head>
    <HomePage />
  </React.Fragment>
);
