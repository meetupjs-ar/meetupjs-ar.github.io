import Header from 'components/Header/Header';
import Isna from 'components/Isna/Isna';
import withGA from 'next-ga';
import { PageTransition } from 'next-page-transitions';
import App, { Container } from 'next/app';
import getConfig from 'next/config';
import Router from 'next/router';
import React from 'react';

const { publicRuntimeConfig } = getConfig();

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Header />
        <PageTransition classNames="page-transition" timeout={400}>
          <Component {...pageProps} />
        </PageTransition>
        <Isna />
      </Container>
    );
  }
}

export default withGA(publicRuntimeConfig.GA, Router)(MyApp);
