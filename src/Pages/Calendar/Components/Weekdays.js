import React, { Component } from 'react';

class Weekdays extends Component {
  state = {
    weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  };

  render() {
    const { weekdays } = this.state;

    return (
      <div className="b--black-10 bl bt bw1 dn flex-l">
        {weekdays.map((weekday) => (
          <div
            key={weekday}
            className="b--black-10 bg-white black-alternative br bw1 pv3 tc ttc width-one-seventh-l"
          >
            {weekday}
          </div>
        ))}
      </div>
    );
  }
}

export default Weekdays;
