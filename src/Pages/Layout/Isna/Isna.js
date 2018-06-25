import Mousetrap from 'mousetrap';
import React, { PureComponent } from 'react';
import * as styles from './css/Isna.module.css';
import Notifications from './data/Notifications';
import IsnaPicture from './images/isna.png';
import IsnaSound from './sounds/isna.mp3';
import AsyncImage from '../../Utils/AsyncImage';

class Isna extends PureComponent {
  state = {
    audio: new Audio(IsnaSound),
    active: false,
    message: ''
  };

  componentDidMount() {
    Mousetrap.bind('up up down down left right left right b a enter', this.showEasterEgg);

    const notification = Notifications.shift();
    if (notification) this.showNotification(notification);
  }

  showEasterEgg = () => {
    if (!this.state.active) {
      this.setState({
        active: true
      });

      this.state.audio.play();

      setTimeout(() => {
        this.setState({
          active: false
        });
      }, 2500);
    }
  };

  showNotification = (notification) => {
    setTimeout(() => {
      localStorage.setItem(notification.key, JSON.stringify(notification));

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
      <div className={`${styles.easterEgg} ${active ? styles.easterEggActive : ''}`}>
        <AsyncImage src={IsnaPicture} alt="Nicolas Isnardi" className="v-btm w-100" />
        <p className={`${styles.easterEggMessage} ${message ? '' : 'dn'}`}>{message}</p>
      </div>
    );
  }
}

export default Isna;
