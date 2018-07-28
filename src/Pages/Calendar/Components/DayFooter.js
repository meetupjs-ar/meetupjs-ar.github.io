import PropTypes from 'prop-types';
import React, { Component } from 'react';

class DayFooter extends Component {
  static props = {
    dayNumber: PropTypes.number.isRequired,
    dayName: PropTypes.string.isRequired,
    isToday: PropTypes.bool.isRequired,
    strike: PropTypes.bool.isRequired
  };

  render() {
    const { dayNumber, dayName, isToday, strike } = this.props;

    return (
      <div className="tc tr-l w-20 w-100-l">
        <span className={`${isToday ? 'green' : ''} ${strike ? 'strike' : ''} f3 black-30`}>
          {dayNumber > 9 ? dayNumber : '0' + dayNumber}
        </span>
        <span className={`${isToday ? 'green' : ''} db dn-l f6 ttc black-30`}>{dayName}</span>
      </div>
    );
  }
}

export default DayFooter;
