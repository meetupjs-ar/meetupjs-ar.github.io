import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Event from './Event';

class Events extends Component {
  static props = {
    events: PropTypes.arrayOf(Event.props.event).isRequired
  };

  render() {
    const { events } = this.props;
    const thereAreMoreEventsLabel =
      events.length > 2 ? (
        <span className="black-30 dn f6 mt2 truncate db-l">y {events.length - 2} más</span>
      ) : null;

    return (
      <React.Fragment>
        <ul className="list ma0 pl0">
          {events.map((event, index) => <Event key={index} event={event} index={index} />)}
        </ul>
        {thereAreMoreEventsLabel}
      </React.Fragment>
    );
  }
}

export default Events;
