import PropTypes from 'prop-types';
import React, { Component } from 'react';

class EmptyDays extends Component {
  static props = {
    days: PropTypes.number.isRequired
  };

  render() {
    const { days } = this.props;
    const emptyDays = [];

    for (let index = 0; index < days; index++) {
      emptyDays.push(
        <div
          key={index}
          className="b--black-10 bb bg-near-white bl bw1 dn db-l width-one-seventh-l"
        />
      );
    }

    return emptyDays;
  }
}

export default EmptyDays;
