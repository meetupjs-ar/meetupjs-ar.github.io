import Footer from 'components/Footer/Footer';
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
        <div className="custom-min-vh-100 flex flex-column">
          <Header />
          <div className="flex-auto">
            <PageTransition classNames="page-transition" timeout={400}>
              <Component {...pageProps} />
            </PageTransition>
          </div>
          <Footer />
        </div>
        <Isna />
      </Container>
    );
  }
}

export default withGA(publicRuntimeConfig.GA, Router)(MyApp);
