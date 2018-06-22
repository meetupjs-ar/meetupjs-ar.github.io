import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import Layout from './Components/Layout/Layout';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

smoothscroll.polyfill();
ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
