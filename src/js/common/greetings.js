const moment = require('moment')

let isna
let isnaMessage

function activateNotification(notification) {
    setTimeout(() => {
        localStorage.setItem(notification.key, JSON.stringify(notification))

        if (!isna.classList.contains('activate')) {
            isna.classList.add('activate')
            isnaMessage.innerText = notification.message
            isnaMessage.classList.add('activate')

            setTimeout(() => {
                isna.classList.remove('activate')
                isnaMessage.classList.remove('activate')
            }, notification.hideAfter)
        }
    }, notification.activateAfter)
}

function byExpiration(notification) {
    const notificationExpirationDay = moment(notification.expiration)
    const today = moment(new Date())

    return today.isBefore(notificationExpirationDay)
}

function byStatusInStorage(notification) {
    return !localStorage.getItem(notification.key)
}

function isLocalStorageAvailable() {
    return !!window.localStorage
}

module.exports = function greetings(notifications) {
    if (isLocalStorageAvailable()) {
        isna = document.querySelector('#isna')
        isnaMessage = document.querySelector('#isna-message')

        notifications
            .filter(byExpiration)
            .filter(byStatusInStorage)
            .map(activateNotification)
    }
}
