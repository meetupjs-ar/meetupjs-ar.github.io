import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';

const Loading = ({ message }) => (
  <Container>
    <div className="text-center">
      <h2 className="text-2xl">{message}</h2>
    </div>
  </Container>
);

Loading.propTypes = {
  message: PropTypes.string
};

Loading.defaultProps = {
  message: 'Cargando...'
};

export default Loading;
