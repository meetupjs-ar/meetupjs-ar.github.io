import PropTypes from 'prop-types';
import React from 'react';
import eventMustBeHighlighted from 'utils/eventMustBeHighlighted';
import Event from './Event';

const Events = ({ events }) => {
  const thereAreMoreEventsLabel = events.length > 2 && (
    <span className="hidden lg:block text-sm mt-2 truncate">
      <span>y </span>
      <span>{events.length - 2}</span>
      <span> más</span>
    </span>
  );

  const sortedEvents = events.sort((eventA, eventB) => {
    if (eventMustBeHighlighted(eventA.eventName)) return -1;
    if (eventMustBeHighlighted(eventB.eventName)) return 1;

    return 0;
  });

  return (
    <>
      <ul>
        {sortedEvents.map((event, index) => (
          <Event key={event.shortid} event={event} index={index} />
        ))}
      </ul>
      {thereAreMoreEventsLabel}
    </>
  );
};

Events.propTypes = {
  events: PropTypes.arrayOf(Event.propTypes.event).isRequired
};

export default Events;
