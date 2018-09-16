import rn from 'random-number';
import React from 'react';
import NoSSR from 'react-no-ssr';
import Tilt from 'react-tilt';
import Container from 'utils/Container';
import CalendarPage from '../Calendar/CalendarPage';

const renderBubbles = () => {
  const bubbles = [
    'angular.png',
    'babel.png',
    'browserify.png',
    'eslint.png',
    'gulp.png',
    'isna.png',
    'jest.png',
    'jquery.png',
    'lodash.png',
    'mongodb.png',
    'nextjs.png',
    'npm.png',
    'postcss.png',
    'preact.png',
    'prettier.png',
    'react.png',
    'redux.png',
    'styled-components.png',
    'typescript.png',
    'vue.png',
    'webpack.png',
    'yarn.png'
  ];
  const getRandomAnimationDelay = () => rn({ integer: true, min: 1, max: 8 });
  const getRandomAnimationDuration = () => rn({ integer: true, min: 10, max: 25 });
  const getRandomLeft = () => rn({ integer: true, min: -5, max: 105 });
  const getStyles = logo => ({
    animationDelay: `${getRandomAnimationDelay()}s`,
    animationDuration: `${getRandomAnimationDuration()}s`,
    backgroundImage: `url(/static/Home/${logo})`,
    left: `${getRandomLeft()}%`
  });

  return bubbles.map((logo, index) => (
    <React.Fragment key={logo}>
      <div className="bubble" style={getStyles(logo, index)} />
    </React.Fragment>
  ));
};

const HomePage = () => (
  <React.Fragment>
    <div className="bg-white relative">
      <NoSSR>
        <div className="absolute bottom-0 left-0 overflow-hidden right-0 top-0">
          <div className="bottom-particles dn db-l">{renderBubbles()}</div>
        </div>
      </NoSSR>
      <Container>
        <div className="relative z-2">
          <div className="flex justify-center">
            <h1 className="mv0 mw175 w-100">
              <Tilt
                options={{
                  axis: 'x',
                  reverse: true,
                  scale: '1.05'
                }}
              >
                <img src={require('./logo.svg')} alt="Logo" className="db w-100" />
              </Tilt>
            </h1>
          </div>
          <p className="f4 mb0 mt4 tc">
            <span>¡Sumate a la comunidad de desarrolladores</span>
            <span className="b"> JavaScript </span>
            <span>de Buenos Aires!</span>
          </p>
          <div className="flex justify-center mv4 pb2">
            <a
              href="https://www.facebook.com/groups/1572363023007913/"
              target="_blank"
              rel="noopener noreferrer"
              className="grow mr2 mr3-l w2 w3-ns"
            >
              <img src={require('./facebook.svg')} alt="Logo" className="db w-100" />
            </a>
            <a
              href="https://twitter.com/meetupjs_ar"
              target="_blank"
              rel="noopener noreferrer"
              className="grow mh2 mh3-l w2 w3-ns"
            >
              <img src={require('./twitter.svg')} alt="Logo" className="db w-100" />
            </a>
            <a
              href="https://github.com/meetupjs-ar"
              target="_blank"
              rel="noopener noreferrer"
              className="grow mh2 mh3-l w2 w3-ns"
            >
              <img src={require('./github.svg')} alt="Logo" className="db w-100" />
            </a>
            <a
              href="https://slack.meetupjs.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="grow mh2 mh3-l w2 w3-ns"
            >
              <img src={require('./slack.svg')} alt="Logo" className="db w-100" />
            </a>
            <a
              href="https://www.meetup.com/es-ES/meetup-js/"
              target="_blank"
              rel="noopener noreferrer"
              className="grow mh2 mh3-l w2 w3-ns"
            >
              <img src={require('./meetup.svg')} alt="Logo" className="db w-100" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCosDO1DDQBkKkmmIJaOdyXQ"
              target="_blank"
              rel="noopener noreferrer"
              className="grow ml2 ml3-l w2 w3-ns"
            >
              <img src={require('./youtube.svg')} alt="Logo" className="db w-100" />
            </a>
          </div>
          <div className="flex flex-column flex-row-m flex-row-l items-center justify-center">
            <a
              href="https://github.com/meetupjs-ar/charlas/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 f6 grow mb3 mb0-m mb0-l mr3-m mr3-l no-underline ph3 pv2 ttu"
            >
              <span>Quiero dar una charla</span>
            </a>
            <a
              href="mailto:meetupjs@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 f6 grow no-underline ph3 pv2 ttu"
            >
              <span>Quiero contactarlos</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
    <div className="b--black-10 bt bw1">
      <CalendarPage showOnlyCurrentMonth />
    </div>
  </React.Fragment>
);

export default HomePage;
