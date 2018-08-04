import PropTypes from 'prop-types';
import React, { Component } from 'react';

class DayFooter extends Component {
  static props = {
    event: PropTypes.shape({
      date: PropTypes.string.isRequired,
      eventLink: PropTypes.string.isRequired,
      eventName: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired
  };

  render() {
    const { event, index } = this.props;
    const { eventName } = event;

    return (
      <li
        className={`${
          index > 1 ? 'dn-l' : ''
        } b--black-10 ba bg-washed-yellow black-alternative br1 bw1 f6 lh-solid mv2 pa1 text-shadow-1 truncate`}
      >
        {eventName}
      </li>
    );
  }
}

export default DayFooter;
