import format from 'date-fns/format';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '../Utils/Container';
import Loading from '../Utils/Loading';
import MessageWithAction from '../Utils/MessageWithAction';
import Metatags from '../Utils/Metatags';
import Modal from '../Utils/Modal';
import CalendarPageMetatags from './CalendarPageMetatags';
import Month from './Components/Month';
import Fail from './images/fail.gif';

class CalendarPage extends Component {
  constructor(props) {
    super(props);

    this.state = this.defaultState;
  }

  defaultState = {
    error: false,
    eventsOfTheDay: [],
    loading: true,
    monthlyCalendars: [],
    showModal: false
  };

  static props = {
    showOnlyCurrentMonth: PropTypes.bool.isRequired,
    useMetatags: PropTypes.bool.isRequired
  };

  static defaultProps = {
    showOnlyCurrentMonth: false,
    useMetatags: true
  };

  componentDidMount() {
    // TODO: remove this hack
    this._isMounted = true;
    this.toggleOverflow(false);
    this.fetchEvents();
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.toggleOverflow(false);
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

  getFormattedEventHour = (date) => {
    return format(new Date(date).setUTCMinutes(180), 'HH:mm');
  };

  hideModal = () => {
    this.setState({ showModal: false }, () => this.toggleOverflow(false));
  };

  resetState = () => {
    this.setState(this.defaultState);
  };

  showModal = (eventsOfTheDay) => {
    this.setState(
      {
        eventsOfTheDay,
        showModal: true
      },
      () => this.toggleOverflow(true)
    );
  };

  toggleOverflow = (active) => {
    // TODO: puedo lograr esto de una manera mejor? Modificar un elemento del DOM
    // que no solo está fuera de mi componente sino que fuera del root de la app
    document.querySelector('body').classList[active ? 'add' : 'remove']('overflow-hidden');
  };

  render() {
    const { showOnlyCurrentMonth, useMetatags } = this.props;
    const { error, eventsOfTheDay, loading, monthlyCalendars, showModal } = this.state;
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
      <React.Fragment>
        {useMetatags && <Metatags metatags={CalendarPageMetatags} />}
        <Container large="true">
          <div className="fade-in">
            <div className="flex items-center justify-center">
              <h1 className="mv0">Calendario de eventos</h1>
              <NavLink
                to="/articulos/que-es-el-calendario-de-eventos.html"
                title="¿Qué es el calendario de eventos?"
                className="ml4 no-underline pointer"
              >
                <box-icon name="question-mark" border="circle" size="2.5rem" />
              </NavLink>
            </div>
            {monthlyCalendarsToShow.map((monthlyCalendar) => (
              <Month
                key={monthlyCalendar.when.month}
                monthlyCalendar={monthlyCalendar}
                showModal={this.showModal}
              />
            ))}
            {showOnlyCurrentMonth && (
              <div className="mt4 tc">
                <NavLink
                  to="/calendario.html"
                  title="Ver calendario completo"
                  className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 dib f7 f6-ns grow link ph3 pv2 ttu"
                >
                  Ver calendario completo
                </NavLink>
              </div>
            )}
          </div>
        </Container>
        {showModal && (
          <Modal hideModal={this.hideModal}>
            <div className="bg-white br2 ma3">
              <div className="b--black-10 bb bg-washed-yellow br--top br2 bw1 flex items-center justify-between ph3 pv2">
                <span className="b black-alternative dib f4 ttc">sábado 28</span>
                <span className="grow pt1" onClick={this.hideModal}>
                  <box-icon name="x" color="rgba(0, 0, 0, 0.3)" />
                </span>
              </div>
              <div className="m-vh-75 overflow-y-auto">
                {eventsOfTheDay.map((event, index) => (
                  <div key={index} className="flex mh3 mv3 pv3">
                    <div className="pr3 pr4-ns">
                      <p className="f5 f4-ns mv0 silver">
                        {this.getFormattedEventHour(event.date)}
                      </p>
                    </div>
                    <div className="flex-auto">
                      <h3 className="black-alternative f5 f4-ns mv0">{event.eventName}</h3>
                      {event.place && <p className="black-30 mb0 mt2">{event.place}</p>}
                      <div className="flex">
                        <a
                          href={event.eventLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="b b--black-30 ba bg-yellow-alternative br1 bw1 dib f6 flex grow items-center link mt3 ph3 pv1 ttu white"
                        >
                          <span className="f4 mr2 pt1">
                            <box-icon name="link-external" color="rgba(0, 0, 0, 0.3)" />
                          </span>
                          <span className="black-alternative text-shadow-1">Link</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Modal>
        )}
      </React.Fragment>
    );
  }
}

export default CalendarPage;
