import Header from 'components/Header/Header';
import Isna from 'components/Isna/Isna';
import withGA from 'next-ga';
import { PageTransition } from 'next-page-transitions';
import App, { Container } from 'next/app';
import getConfig from 'next/config';
import Router from 'next/router';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import css from 'styled-jsx/css';

const ANIMATION_DURATION = 400;
const pageTransitionStyles = css`
  .page-transition-enter {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }

  .page-transition-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: opacity ${ANIMATION_DURATION}ms, transform ${ANIMATION_DURATION}ms;
  }

  .page-transition-exit {
    opacity: 1;
  }

  .page-transition-exit-active {
    opacity: 0;
    transition: opacity ${ANIMATION_DURATION}ms;
  }
`;
const { publicRuntimeConfig } = getConfig();

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <style jsx global>
          {pageTransitionStyles}
        </style>
        <Header />
        <PageTransition classNames="page-transition" timeout={ANIMATION_DURATION}>
          <Component {...pageProps} />
        </PageTransition>
        <Isna />
      </Container>
    );
  }
}

export default withGA(publicRuntimeConfig.GA, Router)(MyApp);
