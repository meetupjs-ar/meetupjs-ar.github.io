import Mousetrap from 'mousetrap';
import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';
import * as styles from './Isna.module.css';
import IsnaSound from './Isna.mp3';
import IsnaPicture from './isna.png';
import Notifications from './Notifications';

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
        <LazyLoad height="100%" once={true}>
          <img src={IsnaPicture} alt="Nicolas Isnardi" className="v-btm w-100" />
        </LazyLoad>
        {message && <p className={styles.easterEggMessage}>{message}</p>}
      </div>
    );
  }
}

export default Isna;
