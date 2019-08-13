import format from 'date-fns/format';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import shortid from 'shortid';
import Container from 'utils/Container';
import FormatDate from 'utils/FormatDate';
import Loading from 'utils/Loading';
import MessageWithAction from 'utils/MessageWithAction';
import Modal from 'utils/Modal';
import Icon from '../Utils/Icon';
import './CalendarPage.css';
import Month from './Month';

class CalendarPage extends Component {
  static defaultProps = {
    showOnlyCurrentMonth: false
  };

  static propTypes = {
    showOnlyCurrentMonth: PropTypes.bool
  };

  defaultState = {
    currentDay: new Date(),
    error: false,
    eventsOfTheDay: [],
    loading: true,
    monthlyCalendars: [],
    showModal: false
  };

  constructor(props) {
    super(props);

    this.state = this.defaultState;
  }

  componentDidMount() {
    // TODO: remove this hack
    this.isComponentMounted = true;
    this.toggleOverflow(false);
    this.fetchEvents();
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
    this.toggleOverflow(false);
  }

  fetchEvents = async () => {
    this.resetState();
    try {
      const response = await fetch('https://calendar-api.now.sh/');
      const monthlyCalendars = await response.json();
      if (this.isComponentMounted) {
        this.setState({
          error: false,
          loading: false,
          monthlyCalendars: monthlyCalendars.map(monthlyCalendar => ({
            ...monthlyCalendar,
            events: monthlyCalendar.events.map(event => ({ ...event, shortid: shortid.generate() }))
          }))
        });
      }
    } catch (error) {
      if (this.isComponentMounted) {
        this.setState({
          error: true,
          loading: false
        });
      }
    }
  };

  addMinutes = (date, minutes) => new Date(date.getTime() + minutes * 60000);

  getFormattedEventHour = date => format(this.addMinutes(new Date(date), 180), 'HH:mm');

  hideModal = () => {
    this.setState({ showModal: false }, () => this.toggleOverflow(false));
  };

  resetState = () => {
    this.setState(this.defaultState);
  };

  showModal = (eventsOfTheDay, currentDay) => {
    this.setState(
      {
        currentDay,
        eventsOfTheDay,
        showModal: true
      },
      () => this.toggleOverflow(true)
    );
  };

  toggleOverflow = active => {
    // TODO: puedo lograr esto de una manera mejor? Modificar un elemento del DOM
    // que no solo está fuera de mi componente sino que fuera del root de la app
    document.querySelector('body').classList[active ? 'add' : 'remove']('overflow-hidden');
  };

  render() {
    const { showOnlyCurrentMonth } = this.props;
    const { currentDay, error, eventsOfTheDay, loading, monthlyCalendars, showModal } = this.state;
    const monthlyCalendarsToShow = showOnlyCurrentMonth ? [monthlyCalendars[0]] : monthlyCalendars;

    if (loading) {
      return <Loading message="Buscando eventos..." />;
    }

    if (error) {
      return (
        <MessageWithAction
          action={this.fetchEvents}
          actionMessage="Intentar nuevamente"
          image="/static/Calendar/fail.gif"
          imageAlt="Error"
          message="Ocurrió un error al traer los eventos."
        />
      );
    }

    return (
      <>
        <Container large="large">
          <div className="fade-in">
            <div className="flex items-center justify-center">
              <h1 className="font-bold text-4xl">Calendario de eventos</h1>
              <a
                href="https://goo.gl/forms/vzPGDccvtYcOsdEi1"
                title="Agregar un evento al calendario"
                className="grow ml-4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agregar un evento al calendario"
              >
                <Icon name="plus" />
              </a>
              <Link href="/articulos/que-es-el-calendario-de-eventos.html" passHref>
                <a
                  href="#!"
                  title="¿Qué es el calendario de eventos?"
                  className="grow ml-4"
                  aria-label="¿Qué es el calendario de eventos?"
                >
                  <Icon name="questionMark" />
                </a>
              </Link>
            </div>
            {monthlyCalendarsToShow.map(monthlyCalendar => (
              <Month
                key={monthlyCalendar.when.month}
                monthlyCalendar={monthlyCalendar}
                showModal={this.showModal}
              />
            ))}
            {showOnlyCurrentMonth && (
              <div className="mt-8 text-center">
                <Link href="/calendario.html" passHref>
                  <a
                    href="#!"
                    title="Ver calendario completo"
                    className="bg-secondary border-black-10 border-2 font-bold grow inline-block px-5 py-2 rounded text-sm uppercase"
                  >
                    Ver calendario completo
                  </a>
                </Link>
              </div>
            )}
          </div>
        </Container>
        {showModal && (
          <Modal hideModal={this.hideModal}>
            <div className="bg-white cursor-default rounded m-4">
              <div className="border-gray-300 border-solid border-b-2 bg-secondary-light rounded-t flex items-center justify-between p-4">
                <span className="text-xl">
                  <FormatDate date={currentDay} />
                </span>
                <button onClick={this.hideModal} type="button">
                  <Icon name="close" />
                </button>
              </div>
              <div className="max-h-75-vh overflow-y-auto">
                {eventsOfTheDay
                  .sort((eventA, eventB) => new Date(eventA.date) - new Date(eventB.date))
                  .map(event => (
                    <div key={event.eventName} className="flex m-4 py-4">
                      <div className="pr-4 lg:pr-8">
                        <p className="text-quaternary lg:text-xl">
                          {this.getFormattedEventHour(event.date)}
                        </p>
                      </div>
                      <div className="flex-auto">
                        <h3 className="font-bold lg:text-xl">{event.eventName}</h3>
                        {event.place && <p className="text-quaternary mt-3">{event.place}</p>}
                        <div className="flex mt-4">
                          <a
                            href={event.eventLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-secondary border-black-10 border-2 font-bold flex grow items-center px-5 py-2 rounded text-sm uppercase"
                          >
                            <span className="mr-3 text-xl">
                              <Icon name="linkExternal" width="w-4" />
                            </span>
                            <span>Link</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </Modal>
        )}
      </>
    );
  }
}

export default CalendarPage;
