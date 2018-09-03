import React, { Component } from 'react';
import AsyncImage from '../Utils/AsyncImage';
import Container from '../Utils/Container';
import Metatags from '../Utils/Metatags';
import Facepalm from './images/facepalm.gif';
import ServiceStatus from './components/ServiceStatus';
import StatusPageMetatags from './StatusPageMetatags';
import Success from './images/success.gif';

const STATUS_RESPONSE_TYPE = {
  UNKNOWN: 0,
  SUCCESS: 1,
  ERROR: 2
};

class StatusPage extends Component {
  constructor(props) {
    super(props);

    this.state = this.defaultState;
  }

  defaultState = {
    calendarApi: STATUS_RESPONSE_TYPE.UNKNOWN,
    calendarBot: STATUS_RESPONSE_TYPE.UNKNOWN,
    eventbriteApi: STATUS_RESPONSE_TYPE.UNKNOWN,
    meetupApi: STATUS_RESPONSE_TYPE.UNKNOWN,
    spreadsheetApi: STATUS_RESPONSE_TYPE.UNKNOWN
  };

  checkStatus = () => {
    this.setState(this.defaultState);

    this.getServiceStatus('https://spreadsheet-api.now.sh/').then((status) => {
      this._isMounted &&
        this.setState({
          spreadsheetApi: status
        });
    });

    this.getServiceStatus('https://eventbrite-api.now.sh/').then((status) => {
      this._isMounted &&
        this.setState({
          eventbriteApi: status
        });
    });

    this.getServiceStatus('https://meetup-api.now.sh/').then((status) => {
      this._isMounted &&
        this.setState({
          meetupApi: status
        });
    });

    this.getServiceStatus('https://calendar-api.now.sh/').then((status) => {
      this._isMounted &&
        this.setState({
          calendarApi: status
        });
    });

    this.getServiceStatus('https://meetupjs-slack-bot.now.sh/').then((status) => {
      this._isMounted &&
        this.setState({
          calendarBot: status
        });
    });
  };

  componentDidMount() {
    // TODO: eliminar este hack
    this._isMounted = true;
    this.checkStatus();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getServiceStatus = (url) => {
    return new Promise((resolve) => {
      fetch(url)
        .then(() => resolve(STATUS_RESPONSE_TYPE.SUCCESS))
        .catch(() => resolve(STATUS_RESPONSE_TYPE.ERROR));
    });
  };

  isChecking = () => {
    const { calendarApi, calendarBot, eventbriteApi, meetupApi, spreadsheetApi } = this.state;
    return !calendarApi || !calendarBot || !eventbriteApi || !meetupApi || !spreadsheetApi;
  };

  isError = () => {
    const { calendarApi, calendarBot, eventbriteApi, meetupApi, spreadsheetApi } = this.state;
    return (
      calendarApi === STATUS_RESPONSE_TYPE.ERROR &&
      calendarBot === STATUS_RESPONSE_TYPE.ERROR &&
      eventbriteApi === STATUS_RESPONSE_TYPE.ERROR &&
      meetupApi === STATUS_RESPONSE_TYPE.ERROR &&
      spreadsheetApi === STATUS_RESPONSE_TYPE.ERROR
    );
  };

  isOk = () => {
    const { calendarApi, calendarBot, eventbriteApi, meetupApi, spreadsheetApi } = this.state;
    return (
      calendarApi === STATUS_RESPONSE_TYPE.SUCCESS &&
      calendarBot === STATUS_RESPONSE_TYPE.SUCCESS &&
      eventbriteApi === STATUS_RESPONSE_TYPE.SUCCESS &&
      meetupApi === STATUS_RESPONSE_TYPE.SUCCESS &&
      spreadsheetApi === STATUS_RESPONSE_TYPE.SUCCESS
    );
  };

  render() {
    const { calendarApi, calendarBot, eventbriteApi, meetupApi, spreadsheetApi } = this.state;

    return (
      <Container>
        <Metatags metatags={StatusPageMetatags} />
        <div className="mb4">
          <h1 className="mv0 tc">Estado de los servicios</h1>
        </div>
        <ServiceStatus
          name="Spreadsheet API"
          status={spreadsheetApi}
          description="API para traer los eventos que la comunidad cargó por medio del calendario."
        />
        <ServiceStatus
          name="Eventbrite API"
          status={eventbriteApi}
          description="API para traer los eventos de eventbrite.com."
        />
        <ServiceStatus
          name="Meetup API"
          status={meetupApi}
          description="API para traer los eventos de meetup.com."
        />
        <ServiceStatus
          name="Calendar API"
          status={calendarApi}
          description="API que agrupa y ordena los eventos por fecha para mostrar en el calendario."
        />
        <ServiceStatus
          name="Calendar BOT"
          status={calendarBot}
          description="Bot de Slack que publica todos los días los próximos eventos."
        />
        {this.isOk() && (
          <AsyncImage src={Success} alt="Éxito" className="db center fade-in m-h5 mt4" />
        )}
        {this.isError() && (
          <AsyncImage src={Facepalm} alt="Error" className="db center fade-in m-h5 mt4" />
        )}
        <div className="mt4 tc">
          <button
            className={`${
              this.isChecking() ? 'o-50' : ''
            } b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 dib f6 grow link ph3 pointer pv2 ttu`}
            onClick={() => {
              !this.isChecking() && this.checkStatus();
            }}
          >
            {this.isChecking() ? 'Verificando' : 'Verificar nuevamente'}
          </button>
        </div>
      </Container>
    );
  }
}

export default StatusPage;
