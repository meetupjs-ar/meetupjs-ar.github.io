import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';
import Container from '../Utils/Components/Container';
import Metatags from '../Utils/Components/Metatags';
import Facepalm from './images/facepalm.gif';
import ServiceStatus from './components/ServiceStatus';
import StatusPageMetatags from './StatusPageMetatags';
import Success from './images/success.gif';

class StatusPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = this.defaultState;
  }

  defaultState = {
    calendarApi: 0,
    calendarBot: 0,
    eventbriteApi: 0,
    meetupApi: 0,
    spreadsheetApi: 0
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
    // TODO: remove this hack by using some library or implementing some pattern
    this._isMounted = true;
    this.checkStatus();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getServiceStatus = (url) => {
    return new Promise((resolve) => {
      fetch(url)
        .then(() => resolve(1))
        .catch(() => resolve(2));
    });
  };

  isChecking = () => {
    const { calendarApi, calendarBot, eventbriteApi, meetupApi, spreadsheetApi } = this.state;
    return !calendarApi || !calendarBot || !eventbriteApi || !meetupApi || !spreadsheetApi;
  };

  isError = () => {
    const { calendarApi, calendarBot, eventbriteApi, meetupApi, spreadsheetApi } = this.state;
    return (
      calendarApi === 2 &&
      calendarBot === 2 &&
      eventbriteApi === 2 &&
      meetupApi === 2 &&
      spreadsheetApi === 2
    );
  };

  isOk = () => {
    const { calendarApi, calendarBot, eventbriteApi, meetupApi, spreadsheetApi } = this.state;
    return (
      calendarApi === 1 &&
      calendarBot === 1 &&
      eventbriteApi === 1 &&
      meetupApi === 1 &&
      spreadsheetApi === 1
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
          <LazyLoad height="100%" once={true}>
            <img src={Success} alt="Éxito" className="db center fade-in h5 mt4" />
          </LazyLoad>
        )}
        {this.isError() && (
          <LazyLoad height="100%" once={true}>
            <img src={Facepalm} alt="Error" className="db center fade-in h5 mt4" />
          </LazyLoad>
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
