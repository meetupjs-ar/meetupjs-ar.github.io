import classnames from 'classnames';
import isBefore from 'date-fns/isBefore';
import isSameDay from 'date-fns/isSameDay';
import parseISO from 'date-fns/parseISO';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DayFooter from './DayFooter';
import Event from './Event';
import Events from './Events';

const getDayName = {
  0: 'domingo',
  1: 'lunes',
  2: 'martes',
  3: 'miércoles',
  4: 'jueves',
  5: 'viernes',
  6: 'sábado'
};

class Days extends Component {
  getBgColor = (currentDay, today) => {
    if (isSameDay(currentDay, today)) {
      return 'bg-washed-green';
    }

    if (isBefore(currentDay, today)) {
      return 'bg-near-white';
    }

    return '';
  };

  getEventsOfTheDay = (eventsInMonth, day) =>
    eventsInMonth.filter(event => isSameDay(parseISO(event.date), day));

  getStrike = (currentDay, today) => isBefore(currentDay, today) && !isSameDay(currentDay, today);

  isVisibleInMobile = (currentDay, today) =>
    isBefore(today, currentDay) || isSameDay(today, currentDay);

  render() {
    const { days, events, month, showModal } = this.props;
    const elements = [];

    for (let index = 0; index < days; index += 1) {
      const currentDayNumber = index + 1;
      const currentDay = new Date(month.getFullYear(), month.getMonth(), currentDayNumber);
      const today = new Date();

      const bgColor = this.getBgColor(currentDay, today);
      const isVisibleInMobile = this.isVisibleInMobile(currentDay, today);
      const eventsOfTheDay = this.getEventsOfTheDay(events, currentDay);

      elements.push(
        <div
          key={currentDay.getTime()}
          className={classnames([
            bgColor,
            eventsOfTheDay.length ? 'cursor-pointer' : '',
            isVisibleInMobile ? '' : 'hidden lg:block',
            'border-gray-300 border-solid border-b-2 border-l-2 lg:h-32 p-2 w-full width-one-seventh-l'
          ])}
          onClick={() => eventsOfTheDay.length && showModal(eventsOfTheDay, currentDay)}
          role="presentation"
        >
          <div className="flex lg:flex-col h-full items-center lg:items-end">
            <div className="flex-auto order-1 lg:order-none pl-4 lg:pl-0 w-10/12 lg:w-full">
              {eventsOfTheDay.length ? <Events events={eventsOfTheDay} /> : null}
            </div>
            <DayFooter
              dayNumber={currentDay.getDate()}
              dayName={getDayName[currentDay.getDay()]}
              isToday={isSameDay(currentDay, today)}
              strike={this.getStrike(currentDay, today)}
            />
          </div>
        </div>
      );
    }

    return elements;
  }
}

Days.propTypes = {
  days: PropTypes.number.isRequired,
  events: PropTypes.arrayOf(Event.propTypes.event).isRequired,
  month: PropTypes.instanceOf(Date).isRequired,
  showModal: PropTypes.func.isRequired
};

export default Days;
