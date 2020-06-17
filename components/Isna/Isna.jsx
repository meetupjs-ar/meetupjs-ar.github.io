import classnames from 'classnames';
import isBefore from 'date-fns/isBefore';
import parseISO from 'date-fns/parseISO';
import Mousetrap from 'mousetrap';
import getConfig from 'next/config';
import React, { Component } from 'react';
import './Isna.css';

const { publicRuntimeConfig } = getConfig();

function byExpiration(notification) {
  if (isBefore(new Date(), parseISO(notification.expiration))) {
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
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      message: '',
    };
  }

  componentDidMount() {
    this.audio = new Audio('Isna/isna.mp3');
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
        active: true,
      });

      this.audio.play();

      setTimeout(() => {
        this.setState({
          active: false,
        });
      }, 2500);
    }
  };

  showNotification = (notification) => {
    setTimeout(() => {
      if (isLocalStorageAvailable()) {
        localStorage.setItem(notification.key, JSON.stringify(notification));
      }

      this.setState({
        active: true,
        message: notification.message,
      });

      setTimeout(() => {
        this.setState({
          active: false,
        });
      }, notification.hideAfter);
    }, notification.activateAfter);
  };

  render() {
    const { active, message } = this.state;

    return (
      <>
        <div className={classnames(['easter-egg', active ? 'easter-egg-active' : ''])}>
          <img src="Isna/isna.png" alt="Nicolas Isnardi" className="w-full" />
          <p className={classnames(['easter-egg-message', message ? '' : 'hidden'])}>{message}</p>
        </div>
      </>
    );
  }
}

export default Isna;
