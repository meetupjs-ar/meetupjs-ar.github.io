import StatusPage from 'components/Status/StatusPage';
import getConfig from 'next/config';
import Head from 'next/head';
import React from 'react';

const { publicRuntimeConfig } = getConfig();

const metatags = {
  description: `Estado de los servicios de ${publicRuntimeConfig.REACT_APP_URL}`,
  title: `Estado de los servicios - ${publicRuntimeConfig.REACT_APP_TITLE}`,
  url: `${publicRuntimeConfig.REACT_APP_URL}servicios.html`
};

export default () => (
  <React.Fragment>
    <Head>
      <link rel="preconnect" href="https://spreadsheet-api.now.sh" />
      <link rel="preconnect" href="https://eventbrite-api.now.sh" />
      <link rel="preconnect" href="https://meetup-api.now.sh" />
      <link rel="preconnect" href="https://calendar-api.now.sh" />
      <link rel="preconnect" href="https://meetupjs-slack-bot.now.sh" />
      <title>{metatags.title}</title>
      <meta name="description" content={metatags.description} />
      <meta property="og:url" content={metatags.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metatags.title} />
      <meta property="og:description" content={metatags.description} />
      <meta property="og:image" content={publicRuntimeConfig.REACT_APP_SOCIAL_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@meetupjs_ar" />
      <meta name="twitter:creator" content="@meetupjs_ar" />
      <meta name="twitter:title" content={metatags.title} />
      <meta name="twitter:description" content={metatags.description} />
      <meta name="twitter:image" content={publicRuntimeConfig.REACT_APP_SOCIAL_IMAGE} />
    </Head>
    <StatusPage />
  </React.Fragment>
);
