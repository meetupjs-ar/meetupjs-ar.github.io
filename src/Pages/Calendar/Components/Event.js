import PropTypes from 'prop-types';
import React, { Component } from 'react';

class DayFooter extends Component {
  static props = {
    event: PropTypes.shape({
      color: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      eventLink: PropTypes.string.isRequired,
      eventName: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired
  };

  render() {
    const { event, index } = this.props;
    const { color, eventName } = event;

    return (
      <li
        style={{ backgroundColor: color }}
        className={`${
          index > 1 ? 'dn-l' : ''
        } b--black-30 ba br1 bw1 f6 lh-solid mv2 pa1 text-shadow-1 truncate white`}
      >
        {eventName}
      </li>
    );
  }
}

export default DayFooter;
