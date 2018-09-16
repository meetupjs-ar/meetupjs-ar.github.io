import React from 'react';

const Img = ({ src, alt, ...rest }) => (
  <div className="image-shadow-container">
    <img src={src} alt={alt} className="image-shadow" {...rest} />
  </div>
);

export default Img;
