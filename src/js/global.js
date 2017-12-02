const menu = require('./common/menu')
const offline = require('./common/offline')
const safariLinks = require('./common/safari-links')
const serviceWorker = require('./common/service-worker')

window.addEventListener('load', () => {
    menu()
    offline()
    safariLinks()
    serviceWorker()
})
