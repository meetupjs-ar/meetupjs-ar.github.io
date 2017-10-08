const toast = require('./toast.js')

module.exports = function serviceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/sw.js')
            .then(function(registration) {
                // eslint-disable-next-line no-console
                console.log('Service worker registration succeeded:', registration)
            })
            .catch(function(error) {
                // eslint-disable-next-line
                console.error('Service worker registration failed:', error)
            })

        if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.onstatechange = function(event) {
                if (event.target.state === 'redundant') {
                    toast('Hay una versión disponible, toca aquí para actualizar', function() {
                        window.location.reload()
                    })
                }
            }
        }
    } else {
        // eslint-disable-next-line
        console.warn('Service workers are not supported.')
    }
}
