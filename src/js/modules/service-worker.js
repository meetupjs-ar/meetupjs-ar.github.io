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
                console.log('Service worker registration failed:', error)
            })
    } else {
        // eslint-disable-next-line
        console.log('Service workers are not supported.')
    }
}
