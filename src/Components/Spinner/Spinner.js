import PropTypes from 'prop-types';
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
      <div className="pv4 pv5-ns tc">
        <h2 className="mv0 normal">{message}</h2>
      </div>
    );
  }
}

export default Spinner;
