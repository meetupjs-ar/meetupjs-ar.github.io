module.exports = function serviceWorker() {
    if (navigator.serviceWorker) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js', { scope: '/' })
        })
    }
}
