import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Month extends Component {
  static props = {
    monthlyCalendar: PropTypes.shape({
      when: PropTypes.shape({
        month: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired
      })
    })
  };

  render() {
    const { monthlyCalendar } = this.props;

    return (
      <div className="mv4">
        <h2 className="f4 f3-ns mb4 mt0 silver tc ttc">
          {monthlyCalendar.when.month} {monthlyCalendar.when.year}
        </h2>
      </div>
    );
  }
}

export default Month;
