import React from 'react';
import ReactDOM from 'react-dom';
import smoothscroll from 'smoothscroll-polyfill';
import './css/index.css';
import Layout from './Pages/Layout/Layout';
import registerServiceWorker from './pwa/registerServiceWorker';

// En producción habilitamos Google Analytics
if (process.env.NODE_ENV === 'production') {
  require('react-ga').initialize('UA-93848949-1');
}

// Polyfill para animar el scroll to top
smoothscroll.polyfill();

// Montamos la aplicación
ReactDOM.render(<Layout />, document.getElementById('root'));

// Registramos el service worker
// TODO: implementar el evento `newContentAvailable` para refrescar la app
registerServiceWorker();

// Muestra el número de versión en la consola
console.log(process.env.REACT_APP_VERSION);
