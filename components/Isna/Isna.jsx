import isBefore from 'date-fns/is_before';
import Mousetrap from 'mousetrap';
import getConfig from 'next/config';
import React, { Component } from 'react';

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
      <>
        <div className={`easter-egg ${active ? 'easter-egg-active' : ''}`}>
          <img src="/static/Isna/isna.png" alt="Nicolas Isnardi" className="v-btm w-100" />
          <p className={`easter-egg-message ${message ? '' : 'dn'}`}>{message}</p>
        </div>
      </>
    );
  }
}

export default Isna;
