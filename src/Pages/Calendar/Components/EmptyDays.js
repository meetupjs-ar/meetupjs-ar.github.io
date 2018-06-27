import PropTypes from 'prop-types';
import React, { Component } from 'react';

class EmptyDays extends Component {
  static props = {
    days: PropTypes.number.isRequired
  };

  render() {
    const { days } = this.props;

    return Array.apply(null, { length: days }).map((_, index) => (
      <div
        key={index}
        className="b--black-10 bb bg-near-white bl bw1 dn db-l width-one-seventh-l"
      />
    ));
  }
}

export default EmptyDays;
