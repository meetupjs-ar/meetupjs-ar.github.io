import PropTypes from 'prop-types';
import React from 'react';
import Event from './Event';

const Events = ({ events }) => {
  const thereAreMoreEventsLabel = events.length > 2 && (
    <span className="black-30 dn f6 mt2 truncate db-l">
      <span>y </span>
      <span>{events.length - 2}</span>
      <span> más</span>
    </span>
  );

  const sortedEvents = events.sort((eventA, eventB) => {
    if (eventA.eventName.includes('Meetup.js')) return -1;
    if (eventB.eventName.includes('Meetup.js')) return 1;

    return 0;
  });

  return (
    <React.Fragment>
      <ul className="list ma0 pl0">
        {sortedEvents.map((event, index) => (
          <Event key={event.shortid} event={event} index={index} />
        ))}
      </ul>
      {thereAreMoreEventsLabel}
    </React.Fragment>
  );
};

Events.propTypes = {
  events: PropTypes.arrayOf(Event.propTypes.event).isRequired
};

export default Events;
