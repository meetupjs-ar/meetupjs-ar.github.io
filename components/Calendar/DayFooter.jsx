import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const DayFooter = ({ dayNumber, dayName, isToday, strike }) => (
  <div className="text-primary lg:text-right w-2/12 lg:w-full">
    <span
      className={classnames([
        isToday ? 'text-dark-green' : '',
        strike ? 'line-through text-quaternary' : '',
        'text-xl'
      ])}
    >
      {dayNumber > 9 ? dayNumber : `0${dayNumber}`}
    </span>
    <span
      className={classnames([
        isToday ? 'text-dark-green' : '',
        'block capitalize lg:hidden text-xs'
      ])}
    >
      {dayName}
    </span>
  </div>
);

DayFooter.propTypes = {
  dayNumber: PropTypes.number.isRequired,
  dayName: PropTypes.string.isRequired,
  isToday: PropTypes.bool.isRequired,
  strike: PropTypes.bool.isRequired
};

export default DayFooter;
