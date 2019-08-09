import PropTypes from 'prop-types';
import React from 'react';

const Img = ({ src, alt, ...rest }) => (
  <div className="image-shadow-container">
    <img src={src} alt={alt} className="image-shadow" {...rest} />
    <p className="mt-4 text-center text-quaternary text-sm">{alt}</p>
  </div>
);

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Img;
