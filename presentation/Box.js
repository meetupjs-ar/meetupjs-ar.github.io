import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ image, text }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '1rem',
      width: '22vw'
    }}
  >
    <div
      style={{
        backgroundImage: `url(./images/${image}.svg)`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: '25vh'
      }}
    />
    <p>{text}</p>
  </div>
);

Box.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Box;
