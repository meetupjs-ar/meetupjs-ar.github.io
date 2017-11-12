const toast = require('./toast.js')

module.exports = function serviceWorker() {
    if (!navigator.serviceWorker) return

    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function(reg) {
            reg.onupdatefound = function() {
                const installingWorker = reg.installing

                installingWorker.onstatechange = function() {
                    if (installingWorker.state === 'installed') {
                        const text = navigator.serviceWorker.controller
                            ? 'Nueva versión disponible'
                            : 'El contenido está disponible sin conexión'
                        const theme = navigator.serviceWorker.controller ? 'info' : 'success'

                        toast(text, theme)
                    }
                }
            }
        })
    })
}
