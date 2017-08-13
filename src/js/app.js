const enableOffline = require('./modules/offline')
const initMenu = require('./modules/menu')
// const notification = require('./modules/notification')
const renderMonthlyCalendars = require('./modules/calendar')

enableOffline()
initMenu()
renderMonthlyCalendars()

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('service-worker.js')
// }
