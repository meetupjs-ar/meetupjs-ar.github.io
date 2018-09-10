import BlogPage from 'components/Blog/BlogPage';
import Head from 'next/head';
import React from 'react';

const metatags = {
  description: 'En este blog compartimos información relevante para la comunidad.',
  title: `Blog - ${process.env.REACT_APP_TITLE}`,
  url: `${process.env.REACT_APP_URL}blog`
};

export default () => (
  <React.Fragment>
    <Head>
      <title>{metatags.title}</title>
      <meta name="description" content={metatags.description} />
      <meta property="og:url" content={metatags.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metatags.title} />
      <meta property="og:description" content={metatags.description} />
      <meta property="og:image" content={process.env.REACT_APP_SOCIAL_IMAGE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@meetupjs_ar" />
      <meta name="twitter:creator" content="@meetupjs_ar" />
      <meta name="twitter:title" content={metatags.title} />
      <meta name="twitter:description" content={metatags.description} />
      <meta name="twitter:image" content={process.env.REACT_APP_SOCIAL_IMAGE} />
    </Head>
    <BlogPage />
  </React.Fragment>
);
