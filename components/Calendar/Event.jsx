import PropTypes from 'prop-types';
import React from 'react';
import eventMustBeHighlighted from 'utils/eventMustBeHighlighted';

const Event = ({ event, index }) => {
  const { eventName } = event;
  const highlight = eventMustBeHighlighted(eventName)
    ? 'b bg-yellow-alternative'
    : 'bg-washed-yellow';

  return (
    <li
      className={`${highlight} ${index > 1 ? 'dn-l' : ''} ${
        index > 0 ? 'mt2' : ''
      } b--black-10 ba black-alternative br1 bw1 f6 lh-solid pa1 text-shadow-1 truncate`}
    >
      {eventName}
    </li>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    eventName: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default Event;
