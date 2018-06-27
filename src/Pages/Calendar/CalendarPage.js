import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Utils/Container';
import Loading from '../Utils/Loading';
import MessageWithAction from '../Utils/MessageWithAction';
import Month from './Components/Month';
import Fail from './images/fail.gif';

class CalendarPage extends Component {
  constructor(props) {
    super(props);

    this.state = this.defaultState;
  }

  defaultState = {
    error: false,
    loading: true,
    monthlyCalendars: []
  };

  static props = {
    showOnlyCurrentMonth: PropTypes.bool
  };

  componentDidMount() {
    // TODO: remove this hack
    this._isMounted = true;
    this.fetchEvents();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchEvents = () => {
    this.resetState();

    fetch('https://calendar-api.now.sh/')
      .then((response) => response.json())
      .then((monthlyCalendars) => {
        this._isMounted &&
          this.setState({
            error: false,
            loading: false,
            monthlyCalendars: monthlyCalendars
          });
      })
      .catch(() => {
        this._isMounted &&
          this.setState({
            error: true,
            loading: false
          });
      });
  };

  resetState = () => {
    this.setState(this.defaultState);
  };

  render() {
    const { showOnlyCurrentMonth } = this.props;
    const { error, loading, monthlyCalendars } = this.state;
    const monthlyCalendarsToShow = showOnlyCurrentMonth ? [monthlyCalendars[0]] : monthlyCalendars;

    if (loading) {
      return <Loading message="Buscando eventos..." />;
    }

    if (error) {
      return (
        <MessageWithAction
          action={this.fetchEvents}
          actionMessage="Intentar nuevamente"
          image={Fail}
          imageAlt="Error"
          message="Ocurrió un error al traer los eventos."
        />
      );
    }

    return (
      <Container large="true">
        <div className="fade-in">
          <div className="flex items-center justify-center">
            <h1 className="mv0">Calendario de eventos</h1>
            <NavLink
              to="/articulos/que-es-el-calendario-de-eventos.html"
              title="¿Qué es el calendario de eventos?"
              className="no-underline pt1"
            >
              <span className="db f30 icon-ion-ios-help-circle-outline ml4 silver" />
            </NavLink>
          </div>
          {monthlyCalendarsToShow.map((monthlyCalendar) => (
            <Month key={monthlyCalendar.when.month} monthlyCalendar={monthlyCalendar} />
          ))}
        </div>
      </Container>
    );
  }
}

export default CalendarPage;
