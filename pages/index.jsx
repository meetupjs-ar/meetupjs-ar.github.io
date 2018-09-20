import HomePage from 'components/Home/HomePage';
import getConfig from 'next/config';
import Head from 'next/head';
import React from 'react';

const { publicRuntimeConfig } = getConfig();

const metatags = {
  description:
    'Grupo para debatir y compartir ideas en torno a Javascript (client-side y server-side), distintos frameworks, librerías y tecnologías en general. Un meetup mensual con charlas preparadas por miembros de la propia comunidad.'
};

export default () => (
  <>
    <Head>
      <title>{publicRuntimeConfig.REACT_APP_TITLE}</title>
      <meta name="description" content={metatags.description} />
      <meta property="og:url" content={publicRuntimeConfig.REACT_APP_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={publicRuntimeConfig.REACT_APP_TITLE} />
      <meta property="og:description" content={metatags.description} />
      <meta property="og:image" content={publicRuntimeConfig.REACT_APP_SOCIAL_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@meetupjs_ar" />
      <meta name="twitter:creator" content="@meetupjs_ar" />
      <meta name="twitter:title" content={publicRuntimeConfig.REACT_APP_TITLE} />
      <meta name="twitter:description" content={metatags.description} />
      <meta name="twitter:image" content={publicRuntimeConfig.REACT_APP_SOCIAL_IMAGE} />
    </Head>
    <HomePage />
  </>
);
