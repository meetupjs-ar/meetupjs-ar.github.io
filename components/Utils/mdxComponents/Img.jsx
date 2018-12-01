import React from 'react';

const Img = ({ src, alt, ...rest }) => (
  <div className="image-shadow-container">
    <img src={src} alt={alt} className="image-shadow" {...rest} />
    <p className="black-50 f6 mb0 mt3 tc">{alt}</p>
  </div>
);

export default Img;
