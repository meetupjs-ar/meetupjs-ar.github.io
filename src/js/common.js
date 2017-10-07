const offline = require('./modules/offline')
const menu = require('./modules/menu')
const safariLinks = require('./modules/safari-links')
const serviceWorker = require('./modules/service-worker')

offline()
menu()
safariLinks()
serviceWorker()
