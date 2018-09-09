import PostPage from 'components/Blog/PostPage';
import Head from 'next/head';
import React from 'react';

const metatags = {
  description:
    'Les compartimos una lista de puntos que recomendamos tener en cuenta a la hora de preparar una charla.',
  title: `Consejos para dar una charla - ${process.env.REACT_APP_TITLE}`,
  url: `${process.env.REACT_APP_URL}articulos/consejos-para-dar-una-charla`
};

export default () => (
  <React.Fragment>
    <Head>
      <title>️{metatags.title}</title>
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
    <PostPage name="consejos-para-dar-una-charla" />
  </React.Fragment>
);
