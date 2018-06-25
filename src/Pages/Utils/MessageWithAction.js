import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import AsyncImage from './AsyncImage';
import Container from './Container';

class MessageWithAction extends PureComponent {
  static propTypes = {
    action: PropTypes.func.isRequired,
    actionMessage: PropTypes.string.isRequired,
    image: PropTypes.string,
    imageAlt: PropTypes.string,
    message: PropTypes.string.isRequired
  };

  static defaultProps = {
    action: () => {},
    actionMessage: '',
    image: '',
    imageAlt: '',
    message: 'Cargando...'
  };

  render() {
    const { action, actionMessage, image, imageAlt, message } = this.props;

    return (
      <Container>
        <div className="tc">
          <h2 className="mb4 mt0 normal silver">{message}</h2>
          <AsyncImage src={image} alt={imageAlt} className="db center h5 mb4" />
          <button
            className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 dib f6 grow link ph3 pointer pv2 ttu"
            onClick={action}
          >
            {actionMessage}
          </button>
        </div>
      </Container>
    );
  }
}

export default MessageWithAction;
