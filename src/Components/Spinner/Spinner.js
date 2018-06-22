import PropTypes from 'prop-types';
import Body from '../Body/Body';
import React, { PureComponent } from 'react';

class Spinner extends PureComponent {
  static propTypes = {
    message: PropTypes.string
  };

  static defaultProps = {
    message: 'Cargando...'
  };

  render() {
    const { message } = this.props;

    return (
      <Body>
        <div className="tc">
          <h2 className="mv0 normal">{message}</h2>
        </div>
      </Body>
    );
  }
}

export default Spinner;
