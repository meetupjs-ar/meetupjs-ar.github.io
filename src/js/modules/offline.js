const toast = require('./toast.js')

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
}

function checkOffline() {
    header.classList[navigator.onLine ? 'remove' : 'add']('app__offline')

    var icon = document.createElement('i')
    icon.className = 'material-icons'
    icon.textContent = navigator.onLine? 'signal_wifi_4_bar' : 'signal_wifi_off'
    toast(navigator.onLine ? 'online':'offline', {childs: [icon]})
}

const header = document.querySelector('header')

module.exports = function () {
    document.addEventListener('DOMContentLoaded', function() {
        if (!navigator.onLine) checkOffline()

        window.addEventListener('online', checkOffline, false)
        window.addEventListener('offline', checkOffline, false)
    })
}
