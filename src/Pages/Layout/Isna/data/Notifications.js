import isBefore from 'date-fns/is_before';

const allNotifications = [];

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
