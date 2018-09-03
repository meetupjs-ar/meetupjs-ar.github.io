import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

const Metatags = ({ metatags }) => {
  const { absoluteUrl, description, title } = metatags;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={absoluteUrl} />
    </Helmet>
  );
};

Metatags.propTypes = {
  metatags: PropTypes.shape({
    absoluteUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Metatags;
