import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text }) => (
  <h1
    style={{
      margin: '3vh 0'
    }}
  >
    {text}
  </h1>
);

Title.propTypes = {
  text: PropTypes.string.isRequired
};

export default Title;
