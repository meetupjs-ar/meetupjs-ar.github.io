import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import Layout from './Components/Layout/Layout';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV === 'production') {
  const ReactGA = require('react-ga');
  ReactGA.initialize('UA-93848949-1');
}

if (process.env.NODE_ENV === 'development') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

smoothscroll.polyfill();
ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();

console.log(process.env.REACT_APP_VERSION);
