import Header from 'components/Header/Header';
import { PageTransition } from 'next-page-transitions';
import App, { Container } from 'next/app';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
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

class MyApp extends App {
  static propTypes = {
    router: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired
  };

  showIsna = () => {
    const url = this.props.router.pathname;

    if (url.includes('blog') || url.includes('articulos')) {
      return false;
    }

    return true;
  };

  render() {
    const { Component, pageProps } = this.props;
    // const showIsna = this.showIsna();

    return (
      <Container>
        <style jsx global>
          {pageTransitionStyles}
        </style>
        <Header />
        <PageTransition classNames="page-transition" timeout={ANIMATION_DURATION}>
          <Component {...pageProps} />
        </PageTransition>
      </Container>
    );
  }
}

export default withRouter(MyApp);
