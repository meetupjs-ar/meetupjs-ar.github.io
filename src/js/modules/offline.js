const toast = require('./toast.js')

const body = document.querySelector('body')

function updateConnectionStatus() {
    const method = navigator.onLine ? 'remove' : 'add'
    const text = navigator.onLine ? 'Estás conectado' : 'Estás desconectado'

    body.classList[method]('offline')
    toast(text, icon)
}

module.exports = function offline() {
    if (!navigator.onLine) {
        updateConnectionStatus()
    }

    window.addEventListener('offline', updateConnectionStatus)
    window.addEventListener('online', updateConnectionStatus)
}
