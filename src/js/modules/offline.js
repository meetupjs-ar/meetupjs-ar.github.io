const toast = require('./toast.js')

function updateConnectionStatus() {
    const text = navigator.onLine ? 'Estás conectado' : 'Estás desconectado'

    toast(text)
}

module.exports = function offline() {
    if (!navigator.onLine) {
        updateConnectionStatus()
    }

    window.addEventListener('offline', updateConnectionStatus)
    window.addEventListener('online', updateConnectionStatus)
}
