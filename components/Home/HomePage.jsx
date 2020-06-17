import rn from 'random-number';
import React from 'react';
import NoSSR from 'react-no-ssr';
import Tilt from 'react-tilt';
import Container from 'utils/Container';
import Icon from 'utils/Icon';
import './HomePage.css';
import LastArticles from '../Blog/LastArticles';

const renderLogos = () => {
  const logos = [
    'angular.png',
    'babel.png',
    'browserify.png',
    'eslint.png',
    'gulp.png',
    'isna.png',
    'jest.png',
    'jorge.png',
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
    'yarn.png',
  ];
  const getRandomAnimationDelay = () => rn({ integer: true, min: 1, max: 8 });
  const getRandomAnimationDuration = () => rn({ integer: true, min: 10, max: 25 });
  const getRandomLeft = () => rn({ integer: true, min: -5, max: 105 });
  const getStyles = (logo) => ({
    animationDelay: `${getRandomAnimationDelay()}s`,
    animationDuration: `${getRandomAnimationDuration()}s`,
    backgroundImage: `url(Home/${logo})`,
    left: `${getRandomLeft()}%`,
  });

  return logos.map((logo, index) => (
    <React.Fragment key={logo}>
      <div className="animated-logo" style={getStyles(logo, index)} />
    </React.Fragment>
  ));
};

const HomePage = () => (
  <>
    <div className="relative">
      <NoSSR>
        <div className="absolute bottom-0 left-0 overflow-hidden right-0 top-0">
          <div className="bottom-particles hidden lg:block">{renderLogos()}</div>
        </div>
      </NoSSR>
      <Container>
        <div className="relative z-20">
          <div className="flex justify-center">
            <h1 className="w-40">
              <Tilt
                options={{
                  axis: 'x',
                  reverse: true,
                  scale: '1.05',
                }}
              >
                <Icon name="logo" width="w-full" />
              </Tilt>
            </h1>
          </div>
          <p className="mb-0 mt-8 text-center text-xl">
            <span>¡Sumate a la comunidad de desarrolladores</span>
            <strong> JavaScript </strong>
            <span>de Buenos Aires!</span>
          </p>
          <div className="flex justify-center my-8">
            <a
              href="https://www.facebook.com/groups/1572363023007913/"
              target="_blank"
              rel="noopener noreferrer"
              className="grow mx-2 lg:mx-4 w-16"
            >
              <Icon name="facebook" width="w-full" />
            </a>
            <a
              href="https://meetupjs.us19.list-manage.com/subscribe?u=4dfce508f79d990ee7db6f802&id=06fe2563f6"
              target="_blank"
              rel="noopener noreferrer"
              className="grow mx-2 lg:mx-4 w-16"
            >
              <Icon name="emailList" width="w-full" />
            </a>
            <a
              href="https://twitter.com/meetupjs_ar"
              target="_blank"
              rel="noopener noreferrer"
              className="grow mx-2 lg:mx-4 w-16"
            >
              <Icon name="twitter" width="w-full" />
            </a>
            <a
              href="https://github.com/meetupjs-ar"
              target="_blank"
              rel="noopener noreferrer"
              className="grow mx-2 lg:mx-4 w-16"
            >
              <Icon name="github" width="w-full" />
            </a>
            <a
              href="https://slack.meetupjs.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="grow mx-2 lg:mx-4 w-16"
            >
              <Icon name="slack" width="w-full" />
            </a>
            <a
              href="https://www.eventbrite.com/o/meetupjs-26934121251"
              target="_blank"
              rel="noopener noreferrer"
              className="grow mx-2 lg:mx-4 w-16"
            >
              <Icon name="eventbrite" width="w-full" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCosDO1DDQBkKkmmIJaOdyXQ"
              target="_blank"
              rel="noopener noreferrer"
              className="grow mx-2 lg:mx-4 w-16"
            >
              <Icon name="youtube" width="w-full" />
            </a>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <a
              href="https://github.com/meetupjs-ar/charlas/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary border-black-10 border-2 font-bold grow inline-block mb-4 lg:mb-0 lg:mr-4 px-5 py-2 rounded text-sm uppercase"
            >
              <span>Quiero dar una charla</span>
            </a>
            <a
              href="mailto:meetupjs@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary border-black-10 border-2 font-bold grow inline-block px-5 py-2 rounded text-sm uppercase"
            >
              <span>Quiero contactarme</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
    <div className="border-gray-300 border-solid border-t-2">
      <Container>
        <LastArticles />
      </Container>
    </div>
  </>
);

export default HomePage;
