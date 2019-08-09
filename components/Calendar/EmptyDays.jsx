import PropTypes from 'prop-types';
import React from 'react';
import './EmptyDays.css';

const EmptyDays = ({ days }) => {
  const emptyDays = [];

  for (let index = 0; index < days; index += 1) {
    emptyDays.push(
      <div
        key={index}
        className="border-gray-300 border-solid border-b-2 border-l-2 empty-day hidden lg:block capitalize width-one-seventh-l"
      />
    );
  }

  return <>{emptyDays}</>;
};

EmptyDays.propTypes = {
  days: PropTypes.number.isRequired
};

export default EmptyDays;
