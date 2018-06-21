import React, { PureComponent } from 'react';
import logo from './logo.svg';
import facebook from './facebook.svg';
import twitter from './twitter.svg';
import meetup from './meetup.svg';
import slack from './slack.svg';
import youtube from './youtube.svg';
import github from './github.svg';

class Home extends PureComponent {
  render() {
    return (
      <div className="bg-white flex flex-column pv5 pv6-l">
        <div className="flex flex-column items-center h-100 justify-center">
          <h1 className="mv0 mw-175 w-100" data-tilt>
            <img src={logo} alt="Logo" className="v-btm" />
          </h1>
          <p className="black-alternative f4 mb0 mt4 ph3 tc">
            ¡Sumate a la comunidad de desarrolladores
            <span className="b">JavaScript</span> de Buenos Aires!
          </p>
        </div>
        <div className="flex justify-center mv4 mv5-ns">
          <a
            href="https://www.facebook.com/groups/1572363023007913/"
            target="_blank"
            rel="noopener noreferrer"
            className="grow mr2 mr3-l w2 w-60-ns"
          >
            <img src={facebook} alt="facebook" className="v-btm" />
          </a>
          <a
            href="https://twitter.com/meetupjs_ar"
            target="_blank"
            rel="noopener noreferrer"
            className="grow mh2 mh3-l w2 w-60-ns"
          >
            <img src={twitter} alt="twitter" className="v-btm" />
          </a>
          <a
            href="https://github.com/meetupjs-ar"
            target="_blank"
            rel="noopener noreferrer"
            className="grow mh2 mh3-l w2 w-60-ns"
          >
            <img src={github} alt="github" className="v-btm" />
          </a>
          <a
            href="https://slack.meetupjs.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="grow mh2 mh3-l w2 w-60-ns"
          >
            <img src={slack} alt="slack" className="v-btm" />
          </a>
          <a
            href="https://www.meetup.com/es-ES/meetup-js/"
            target="_blank"
            rel="noopener noreferrer"
            className="grow mh2 mh3-l w2 w-60-ns"
          >
            <img src={meetup} alt="meetup" className="v-btm" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCosDO1DDQBkKkmmIJaOdyXQ"
            target="_blank"
            rel="noopener noreferrer"
            className="grow ml2 ml3-l w2 w-60-ns"
          >
            <img src={youtube} alt="youtube" className="v-btm" />
          </a>
        </div>
        <div className="black-alternative flex flex-column flex-row-m flex-row-l items-center justify-center ph3 tc w-100">
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
      </div>
    );
  }
}

export default Home;
