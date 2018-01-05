const moment = require('moment')

let isna
let isnaMessage

function activateNotification(notification) {
    setTimeout(() => {
        localStorage.setItem(notification.key, JSON.stringify(notification))

        if (!isna.classList.contains('easter-egg-ready')) {
            isna.classList.add('easter-egg-ready')
        }

        if (!isna.classList.contains('easter-egg-active')) {
            isna.classList.add('easter-egg-active')
            isnaMessage.innerText = notification.message
            isnaMessage.classList.add('easter-egg-active')

            setTimeout(() => {
                isna.classList.remove('easter-egg-active')
                isnaMessage.classList.remove('easter-egg-active')
            }, notification.hideAfter)
        }
    }, notification.activateAfter)
}

function byExpiration(notification) {
    const notificationExpirationDay = moment(notification.expiration)
    const today = moment(new Date())

    if (today.isBefore(notificationExpirationDay)) {
        return true
    } else {
        try {
            localStorage.removeItem(notification.key)
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error)
        }

        return false
    }
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
