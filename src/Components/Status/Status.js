import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';
import Body from '../Body/Body';
import Metatags from '../Metatags/Metatags';
import Facepalm from './facepalm.gif';
import ServiceStatus from './ServiceStatus';
import StatusPageMetatags from './StatusMetatags';
import Success from './success.gif';

class Status extends PureComponent {
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
      this.setState({
        spreadsheetApi: status
      });
    });

    this.getServiceStatus('https://eventbrite-api.now.sh/').then((status) => {
      this.setState({
        eventbriteApi: status
      });
    });

    this.getServiceStatus('https://meetup-api.now.sh/').then((status) => {
      this.setState({
        meetupApi: status
      });
    });

    this.getServiceStatus('https://calendar-api.now.sh/').then((status) => {
      this.setState({
        calendarApi: status
      });
    });

    this.getServiceStatus('https://meetupjs-slack-bot.now.sh/').then((status) => {
      this.setState({
        calendarBot: status
      });
    });
  };

  componentDidMount() {
    this.checkStatus();
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
      <Body>
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
      </Body>
    );
  }
}

export default Status;
