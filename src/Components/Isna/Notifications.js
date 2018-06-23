const isBefore = require('date-fns/is_before');

const allNotifications = [
  {
    activateAfter: 5000,
    expiration: new Date(2018, 5, 20, 23, 59, 59),
    hideAfter: 8000,
    key: 'hello-world',
    message: '¡Hola mundo!'
  }
];

const notifications = isLocalStorageAvailable()
  ? allNotifications.filter(byExpiration).filter(byStatusInStorage)
  : [];

function byExpiration(notification) {
  if (isBefore(new Date(), notification.expiration)) {
    return true;
  } else {
    try {
      localStorage.removeItem(notification.key);
    } catch (error) {
      console.error(error);
    }

    return false;
  }
}

function byStatusInStorage(notification) {
  return !localStorage.getItem(notification.key);
}

function isLocalStorageAvailable() {
  return !!window.localStorage;
}

export default notifications;
