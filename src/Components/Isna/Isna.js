import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';
import * as styles from './Isna.module.css';
import IsnaPicture from './isna.png';
import Mousetrap from 'mousetrap';
import IsnaSound from './Isna.mp3';

class Isna extends PureComponent {
  state = {
    audio: new Audio(IsnaSound),
    active: false,
    playing: false
  };

  componentDidMount() {
    Mousetrap.bind('up up down down left right left right b a enter', this.showeasterEgg);
  }

  showeasterEgg = () => {
    if (!this.state.playing) {
      this.setState({
        active: true,
        playing: true
      });

      this.state.audio.play();

      setTimeout(() => {
        this.setState({
          active: false,
          playing: false
        });
      }, 2500);
    }
  };

  render() {
    const { active } = this.state;

    return (
      <div className={`${styles.easterEgg} ${active ? styles.easterEggActive : ''}`}>
        <LazyLoad height="100%" once={true}>
          <img src={IsnaPicture} alt="Nicolas Isnardi" className="v-btm w-100" />
        </LazyLoad>
      </div>
    );
  }
}

export default Isna;
