const toast = require('./toast.js')

function updateConnectionStatus() {
    const text = navigator.onLine ? 'Estás conectado' : 'Estás desconectado'
    const theme = navigator.onLine ? 'success' : 'info'

    toast(text, theme)
}

module.exports = function offline() {
    window.addEventListener('offline', updateConnectionStatus)
    window.addEventListener('online', updateConnectionStatus)
}
