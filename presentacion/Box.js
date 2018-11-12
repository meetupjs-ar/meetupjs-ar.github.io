import React from 'react';
import PropTypes from 'prop-types';
import P from './Paragraph';

const Box = ({ image, text }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '1rem',
      width: '25vw'
    }}
  >
    <img
      src={`./images/${image}.svg`}
      alt={text}
      style={{
        margin: '0 auto',
        maxWidth: '18vw',
        width: '100%'
      }}
    />
    <P>{text}</P>
  </div>
);

Box.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Box;
