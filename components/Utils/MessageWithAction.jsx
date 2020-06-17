import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';

const MessageWithAction = ({ action, actionMessage, image, imageAlt, message }) => (
  <Container>
    <div className="text-center">
      <h2 className="text-2xl">{message}</h2>
      <img src={image} alt={imageAlt} className="block fade-in mx-auto h-48 my-8" />
      <button
        className="bg-secondary border-black-10 border-2 font-bold inline-block px-5 py-2 rounded text-sm uppercase"
        onClick={action}
        type="button"
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
  message: PropTypes.string.isRequired,
};

MessageWithAction.defaultProps = {
  image: '',
  imageAlt: '',
};

export default MessageWithAction;
