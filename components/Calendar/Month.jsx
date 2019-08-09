import getDaysInMonth from 'date-fns/get_days_in_month';
import getISODay from 'date-fns/get_iso_day';
import PropTypes from 'prop-types';
import React from 'react';
import Days from './Days';
import EmptyDays from './EmptyDays';
import Events from './Events';
import Weekdays from './Weekdays';

const getMonthNumber = {
  enero: 0,
  febrero: 1,
  marzo: 2,
  abril: 3,
  mayo: 4,
  junio: 5,
  julio: 6,
  agosto: 7,
  septiembre: 8,
  octubre: 9,
  noviembre: 10,
  diciembre: 11
};

function Month({ monthlyCalendar, showModal }) {
  const currentMonthNumber = getMonthNumber[monthlyCalendar.when.month];
  const today = new Date();
  const currentMonth = new Date(today.getFullYear(), currentMonthNumber, 1);
  const currentMonthIsoDay = getISODay(currentMonth);
  const currentMonthDays = getDaysInMonth(currentMonth);
  const emptyDaysAtEnd = 7 - ((currentMonthIsoDay + currentMonthDays) % 7);

  return (
    <div className="mt-8">
      <h2 className="capitalize font-bold text-2xl text-center text-quaternary mb-8">
        <span>
          {monthlyCalendar.when.month}
          {' '}
        </span>
        <span>{monthlyCalendar.when.year}</span>
      </h2>
      <Weekdays />
      <div className="border-gray-300 border-solid border-r-2 border-t-2 flex flex-wrap">
        {currentMonthIsoDay !== 7 && <EmptyDays days={currentMonthIsoDay} />}
        <Days
          days={currentMonthDays}
          month={currentMonth}
          events={monthlyCalendar.events}
          showModal={showModal}
        />
        {emptyDaysAtEnd !== 7 && <EmptyDays days={emptyDaysAtEnd} />}
      </div>
    </div>
  );
}

Month.propTypes = {
  monthlyCalendar: PropTypes.shape({
    events: Events.propTypes.events,
    when: PropTypes.shape({
      month: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired
    })
  }),
  showModal: PropTypes.func.isRequired
};

Month.defaultProps = {
  monthlyCalendar: {
    events: [],
    when: {
      month: '',
      year: ''
    }
  }
};

export default Month;
