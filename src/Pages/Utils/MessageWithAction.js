import PropTypes from 'prop-types';
import React from 'react';
import AsyncImage from './AsyncImage';
import Container from './Container';

const MessageWithAction = ({ action, actionMessage, image = '', imageAlt = '', message }) => (
  <Container>
    <div className="tc">
      <h2 className="black-alternative mb4 mt0 normal">{message}</h2>
      <AsyncImage src={image} alt={imageAlt} className="db center m-h5 mb4" />
      <button
        className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 dib f6 grow link ph3 pointer pv2 ttu"
        onClick={action}
      >
        {actionMessage}
      </button>
    </div>
  </Container>
);

MessageWithAction.propTypes = {
  action: PropTypes.func.isRequired,
  actionMessage: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  message: PropTypes.string.isRequired
};

export default MessageWithAction;
