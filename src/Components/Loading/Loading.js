import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Container from '../Container/Container';

class Loading extends PureComponent {
  static propTypes = {
    message: PropTypes.string
  };

  static defaultProps = {
    message: 'Cargando...'
  };

  render() {
    const { message } = this.props;

    return (
      <Container>
        <div className="tc">
          <h2 className="mv0 normal">{message}</h2>
        </div>
      </Container>
    );
  }
}

export default Loading;
