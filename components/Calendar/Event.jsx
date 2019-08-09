import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import eventMustBeHighlighted from 'utils/eventMustBeHighlighted';

const Event = ({ event, index }) => {
  const { eventName } = event;
  const highlight = eventMustBeHighlighted(eventName)
    ? 'font-bold bg-secondary'
    : 'bg-secondary-light';

  return (
    <li
      className={classnames([
        highlight,
        index > 1 ? 'lg:hidden' : '',
        index > 0 ? 'mt-1' : '',
        'border-black-10 border-2 rounded p-1 text-sm truncate'
      ])}
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
