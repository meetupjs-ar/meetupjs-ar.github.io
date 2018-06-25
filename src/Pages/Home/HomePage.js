import React, { PureComponent } from 'react';
import Tilt from 'react-tilt';
import CalendarPage from '../Calendar/CalendarPage';
import AsyncImage from '../Utils/AsyncImage';
import Container from '../Utils/Container';
import Metatags from '../Utils/Metatags';
import * as styles from './css/HomePage.module.css';
import HomePageMetatags from './HomePageMetatags';
import facebook from './images/facebook.svg';
import github from './images/github.svg';
import logo from './images/logo.svg';
import meetup from './images/meetup.svg';
import slack from './images/slack.svg';
import twitter from './images/twitter.svg';
import youtube from './images/youtube.svg';

class HomePage extends PureComponent {
  render() {
    return (
      <div>
        <Metatags metatags={HomePageMetatags} />
        <div className="bg-white">
          <Container>
            <div className="flex justify-center">
              <h1 className={`${styles.mw175} mv0 w-100`}>
                <Tilt
                  options={{
                    axis: 'x',
                    reverse: true,
                    scale: '1.05'
                  }}
                >
                  <AsyncImage src={logo} alt="Logo" className="db v-btm" />
                </Tilt>
              </h1>
            </div>
            <p className="f4 mb0 mt4 tc">
              ¡Sumate a la comunidad de desarrolladores <span className="b">JavaScript</span> de
              Buenos Aires!
            </p>
            <div className="flex justify-center mv4 pb2">
              <a
                href="https://www.facebook.com/groups/1572363023007913/"
                target="_blank"
                rel="noopener noreferrer"
                className="grow mr2 mr3-l w2 w3-ns"
              >
                <AsyncImage src={facebook} alt="facebook" className="v-btm" />
              </a>
              <a
                href="https://twitter.com/meetupjs_ar"
                target="_blank"
                rel="noopener noreferrer"
                className="grow mh2 mh3-l w2 w3-ns"
              >
                <AsyncImage src={twitter} alt="twitter" className="v-btm" />
              </a>
              <a
                href="https://github.com/meetupjs-ar"
                target="_blank"
                rel="noopener noreferrer"
                className="grow mh2 mh3-l w2 w3-ns"
              >
                <AsyncImage src={github} alt="github" className="v-btm" />
              </a>
              <a
                href="https://slack.meetupjs.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="grow mh2 mh3-l w2 w3-ns"
              >
                <AsyncImage src={slack} alt="slack" className="v-btm" />
              </a>
              <a
                href="https://www.meetup.com/es-ES/meetup-js/"
                target="_blank"
                rel="noopener noreferrer"
                className="grow mh2 mh3-l w2 w3-ns"
              >
                <AsyncImage src={meetup} alt="meetup" className="v-btm" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCosDO1DDQBkKkmmIJaOdyXQ"
                target="_blank"
                rel="noopener noreferrer"
                className="grow ml2 ml3-l w2 w3-ns"
              >
                <AsyncImage src={youtube} alt="youtube" className="v-btm" />
              </a>
            </div>
            <div className="flex flex-column flex-row-m flex-row-l items-center justify-center">
              <a
                href="https://github.com/meetupjs-ar/charlas/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 f6 grow link mb3 mb0-m mb0-l mr3-m mr3-l ph3 pv2 ttu"
              >
                <span>Quiero dar una charla</span>
              </a>
              <a
                href="mailto:meetupjs@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 f6 grow link ph3 pv2 ttu"
              >
                <span>Quiero contactarlos</span>
              </a>
            </div>
          </Container>
        </div>
        <div className="b--black-10 bt bw1">
          <CalendarPage showOnlyCurrentMonth />
        </div>
      </div>
    );
  }
}

export default HomePage;
