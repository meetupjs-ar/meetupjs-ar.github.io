import PropTypes from 'prop-types';
import React from 'react';
import Container from './Container';

const Loading = ({ message = 'Cargando...' }) => (
  <Container>
    <div className="tc">
      <h2 className="mv0 normal">{message}</h2>
    </div>
  </Container>
);

Loading.propTypes = {
  message: PropTypes.string
};

export default Loading;
