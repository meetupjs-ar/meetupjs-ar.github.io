import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Days extends Component {
  static props = {
    days: PropTypes.number.isRequired
  };

  render() {
    const { days } = this.props;

    return Array.apply(null, { length: days }).map((_, index) => (
      <div
        key={index}
        className="b--black-10 bb bg-near-white bl bw1 dn db-l h4-l ph3 pv2 pa2-l w-100 width-one-seventh-l"
      />
    ));
  }
}

export default Days;
