import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Utils/Components/Container';

class CalendarPage extends Component {
  state = {
    error: false,
    events: [],
    loading: true
  };

  static props = {
    showOnlyCurrentMonth: PropTypes.bool
  };

  componentDidMount() {
    fetch('https://calendar-api.now.sh/')
      .then((response) => response.json())
      .then((events) => {
        this.setState({
          error: false,
          events: events,
          loading: false
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          loading: false
        });
      });
  }

  render() {
    const { error, events, loading } = this.state;

    if (loading) {
      return (
        <Container>
          <h1 className="mv0 tc">Cargando...</h1>
        </Container>
      );
    }

    if (error) {
      return (
        <Container>
          <h1 className="mv0 tc">Ha ocurrido un error</h1>
        </Container>
      );
    }

    if (!events.length) {
      return (
        <Container>
          <h1 className="mv0 tc">No hay eventos</h1>{' '}
        </Container>
      );
    }

    if (events.length)
      return (
        <Container>
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
          </div>
        </Container>
      );
  }
}

export default CalendarPage;
