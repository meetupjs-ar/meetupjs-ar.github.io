import isBefore from 'date-fns/is_before';
import Mousetrap from 'mousetrap';
import getConfig from 'next/config';
import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import css from 'styled-jsx/css';

const isnaStyles = css`
  .easterEgg {
    bottom: 0;
    opacity: 0;
    position: fixed;
    right: 0;
    transition: var(--transition);
    transform: translateX(150px);
    width: 150px;
    z-index: 5;
  }

  .easterEggActive {
    opacity: 1;
    transform: translateX(0);
  }

  .easterEggMessage {
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    bottom: 130px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
    max-width: 250px;
    padding: 0.5rem 1rem;
    position: fixed;
    right: 125px;
    transform: translateX(15px);
    transition-delay: 0.25s;
    width: 100%;
    z-index: 5;
  }
`;
const { publicRuntimeConfig } = getConfig();

function byExpiration(notification) {
  if (isBefore(new Date(), notification.expiration)) {
    return true;
  }
  try {
    localStorage.removeItem(notification.key);
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }

  return false;
}

function byStatusInStorage(notification) {
  return !localStorage.getItem(notification.key);
}

function isLocalStorageAvailable() {
  return !!window.localStorage;
}

class Isna extends Component {
  state = {
    active: false,
    message: ''
  };

  componentDidMount() {
    this.audio = new Audio('/static/Isna/isna.mp3');
    this.notifications = this.getNotifications();

    Mousetrap.bind('up up down down left right left right b a enter', this.showEasterEgg);

    const notification = this.notifications.shift();
    if (notification) this.showNotification(notification);
  }

  getNotifications = () =>
    isLocalStorageAvailable()
      ? publicRuntimeConfig.ISNA_MESSAGES.filter(byExpiration).filter(byStatusInStorage)
      : [];

  showEasterEgg = () => {
    const { active } = this.state;

    if (!active) {
      this.setState({
        active: true
      });

      this.audio.play();

      setTimeout(() => {
        this.setState({
          active: false
        });
      }, 2500);
    }
  };

  showNotification = notification => {
    setTimeout(() => {
      if (isLocalStorageAvailable()) {
        localStorage.setItem(notification.key, JSON.stringify(notification));
      }

      this.setState({
        active: true,
        message: notification.message
      });

      setTimeout(() => {
        this.setState({
          active: false
        });
      }, notification.hideAfter);
    }, notification.activateAfter);
  };

  render() {
    const { active, message } = this.state;

    return (
      <React.Fragment>
        <style jsx>{isnaStyles}</style>
        <div className={`easterEgg ${active ? 'easterEggActive' : ''}`}>
          <img src="/static/Isna/isna.png" alt="Nicolas Isnardi" className="v-btm w-100" />
          <p className={`easterEggMessage ${message ? '' : 'dn'}`}>{message}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Isna;
