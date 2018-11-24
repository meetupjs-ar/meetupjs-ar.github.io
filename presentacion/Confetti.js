import React, { Component } from 'react';

const confettiBaseStyles = {
  animation: 'confetti 5s ease-in-out -2s infinite',
  height: '15px',
  position: 'absolute',
  top: 0,
  transformOrigin: 'left top',
  width: '15px'
};

const confetti1 = {
  ...confettiBaseStyles,

  animationDelay: 0,
  backgroundColor: '#f2d74e',
  left: '5%'
};
const confetti2 = {
  ...confettiBaseStyles,

  animationDelay: '-5s',
  backgroundColor: '#95c3de',
  left: '10%'
};
const confetti3 = {
  ...confettiBaseStyles,

  animationDelay: '-3s',
  backgroundColor: '#ff9a91',
  left: '15%'
};
const confetti4 = {
  ...confettiBaseStyles,

  animationDelay: '-2.5s',
  backgroundColor: '#f2d74e',
  left: '20%'
};
const confetti5 = {
  ...confettiBaseStyles,

  animationDelay: '-4s',
  backgroundColor: '#f2d74e',
  left: '25%'
};
const confetti6 = {
  ...confettiBaseStyles,

  animationDelay: '-6s',
  backgroundColor: '#95c3de',
  left: '30%'
};
const confetti7 = {
  ...confettiBaseStyles,

  animationDelay: '-1.5s',
  backgroundColor: '#ff9a91',
  left: '35%'
};
const confetti8 = {
  ...confettiBaseStyles,

  animationDelay: '-2s',
  backgroundColor: '#f2d74e',
  left: '40%'
};
const confetti9 = {
  ...confettiBaseStyles,

  animationDelay: '-3.5s',
  backgroundColor: '#f2d74e',
  left: '45%'
};
const confetti10 = {
  ...confettiBaseStyles,

  animationDelay: '-2.5s',
  backgroundColor: '#95c3de',
  left: '50%'
};
const confetti11 = {
  ...confettiBaseStyles,

  animationDelay: 0,
  backgroundColor: '#ff9a91',
  left: '55%'
};
const confetti12 = {
  ...confettiBaseStyles,

  animationDelay: '-5s',
  backgroundColor: '#f2d74e',
  left: '60%'
};
const confetti13 = {
  ...confettiBaseStyles,

  animationDelay: '-3s',
  backgroundColor: '#f2d74e',
  left: '65%'
};
const confetti14 = {
  ...confettiBaseStyles,

  animationDelay: '-2.5s',
  backgroundColor: '#95c3de',
  left: '70%'
};
const confetti15 = {
  ...confettiBaseStyles,

  animationDelay: '-4s',
  backgroundColor: '#ff9a91',
  left: '75%'
};
const confetti16 = {
  ...confettiBaseStyles,

  animationDelay: '-6s',
  backgroundColor: '#f2d74e',
  left: '80%'
};
const confetti17 = {
  ...confettiBaseStyles,

  animationDelay: '-1.5s',
  backgroundColor: '#f2d74e',
  left: '85%'
};
const confetti18 = {
  ...confettiBaseStyles,

  animationDelay: '-2s',
  backgroundColor: '#95c3de',
  left: '90%'
};
const confetti19 = {
  ...confettiBaseStyles,

  animationDelay: '-3.5s',
  backgroundColor: '#ff9a91',
  left: '95%'
};
const confetti20 = {
  ...confettiBaseStyles,

  animationDelay: '-3.5s',
  backgroundColor: '#f2d74e',
  left: '95%'
};

const injectStyle = style => {
  const styleElement = document.createElement('style');
  let styleSheet = null;

  document.head.appendChild(styleElement);

  styleSheet = styleElement.sheet;
  styleSheet.insertRule(style, styleSheet.cssRules.length);
};

class Confetti extends Component {
  componentDidMount() {
    injectStyle(`
        @keyframes confetti {
            0% { transform: rotateZ(15deg) rotateY(0deg) translate(0, 0); }
            25% { transform: rotateZ(5deg) rotateY(360deg) translate(-5vw, 20vh); }
            50% { transform: rotateZ(15deg) rotateY(720deg) translate(5vw, 60vh); }
            75% { transform: rotateZ(5deg) rotateY(1080deg) translate(-10vw, 80vh); }
            100% { transform: rotateZ(15deg) rotateY(1440deg) translate(10vw, 110vh); }
        }
    `);
  }

  render() {
    return (
      <React.Fragment>
        <div style={confetti1} />
        <div style={confetti2} />
        <div style={confetti3} />
        <div style={confetti4} />
        <div style={confetti5} />
        <div style={confetti6} />
        <div style={confetti7} />
        <div style={confetti8} />
        <div style={confetti9} />
        <div style={confetti10} />
        <div style={confetti11} />
        <div style={confetti12} />
        <div style={confetti13} />
        <div style={confetti14} />
        <div style={confetti15} />
        <div style={confetti16} />
        <div style={confetti17} />
        <div style={confetti18} />
        <div style={confetti19} />
        <div style={confetti20} />
      </React.Fragment>
    );
  }
}

export default Confetti;
