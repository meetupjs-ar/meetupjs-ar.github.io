import PropTypes from 'prop-types';
import React from 'react';
import LazyLoad from 'react-lazyload';

const AsyncImage = ({ alt, src, ...moreAttrs }) => (
  <LazyLoad height="100%" once={true}>
    <img src={src} alt={alt} {...moreAttrs} />
  </LazyLoad>
);

AsyncImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default AsyncImage;
