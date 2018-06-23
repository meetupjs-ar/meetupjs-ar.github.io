import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

class Container extends PureComponent {
  static props = {
    large: PropTypes.bool
  };

  render() {
    const { large } = this.props;

    return <div className={`${large ? 'mw9' : 'mw7'} center ph3 pv5`} {...this.props} />;
  }
}

export default Container;
