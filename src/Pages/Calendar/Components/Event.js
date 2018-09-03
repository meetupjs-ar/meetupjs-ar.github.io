import PropTypes from 'prop-types';
import React from 'react';

const DayFooter = ({ event, index }) => {
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
};

DayFooter.propTypes = {
  event: PropTypes.shape({
    eventName: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default DayFooter;
