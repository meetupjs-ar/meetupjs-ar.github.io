import React from 'react';

const weekdays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const Weekdays = () => (
  <div className="border-gray-300 border-solid border-l-2 border-t-2 hidden lg:flex">
    {weekdays.map(weekday => (
      <div
        key={weekday}
        className="border-gray-300 border-solid border-r-2 capitalize py-4 text-center width-one-seventh-l"
      >
        {weekday}
      </div>
    ))}
  </div>
);

export default Weekdays;
