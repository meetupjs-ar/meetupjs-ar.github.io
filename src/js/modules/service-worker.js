const toast = require('./toast.js')

module.exports = function serviceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/sw.js', { scope: '/' })
            .then(function(registration) {
                // eslint-disable-next-line no-console
                console.log('Service worker registration succeeded:', registration)

                registration.update()
            })
            .catch(function(error) {
                // eslint-disable-next-line no-console
                console.error('Service worker registration failed:', error)
            })

        if (navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.onstatechange = function(event) {
                if (event.target.state === 'redundant') {
                    toast(
                        'Hay una nueva versión disponible, toca aquí para actualizar',
                        function() {
                            window.location.reload()
                        },
                        10000
                    )
                }
            }
        }
    } else {
        // eslint-disable-next-line no-console
        console.warn('Service workers are not supported.')
    }
}
