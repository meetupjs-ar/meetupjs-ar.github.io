import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Container extends Component {
  static propTypes = {
    large: PropTypes.string
  };

  static defaultProps = {
    large: ''
  };

  render() {
    const { large } = this.props;

    return (
      <div className={`${large === 'large' ? 'mw9' : 'mw7'} center ph3 pv5`} {...this.props} />
    );
  }
}

export default Container;
