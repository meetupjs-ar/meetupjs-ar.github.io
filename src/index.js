import 'boxicons';
import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import './css/index.css';
import Layout from './Pages/Layout/Layout';

if (process.env.NODE_ENV === 'production') {
  require('react-ga').initialize('UA-93848949-1');
}

smoothscroll.polyfill();

ReactDOM.render(<Layout />, document.getElementById('root'));

console.log(process.env.REACT_APP_VERSION);
