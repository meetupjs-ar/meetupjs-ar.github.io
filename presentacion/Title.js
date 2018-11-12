import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ imageName, text }) => (
  <h1
    style={{
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      margin: '2vh 0'
    }}
  >
    <span>{text}</span>
    <div
      style={{
        backgroundImage: `url(./images/${imageName}.svg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'inline-block',
        height: '6rem',
        marginLeft: '2rem',
        width: '6rem'
      }}
    />
  </h1>
);

Title.propTypes = {
  imageName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Title;
