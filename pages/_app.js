import App, { Container } from 'next/app';
import React from 'react';
import Header from '../components/Header/Header';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    );
  }
}
