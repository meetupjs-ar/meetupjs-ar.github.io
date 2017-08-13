const toast = require('./toast.js')

const body = document.querySelector('body')

function updateConnectionStatus() {
    body.classList[navigator.onLine ? 'remove' : 'add']('offline')
    toast(navigator.onLine ? 'Estás conectado' : 'Estás desconectado')
}

module.exports = function enableOffline() {
    if (!navigator.onLine) {
        updateConnectionStatus()
    }

    window.addEventListener('offline', updateConnectionStatus)
    window.addEventListener('online', updateConnectionStatus)
}
