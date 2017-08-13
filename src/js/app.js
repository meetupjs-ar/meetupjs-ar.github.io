// const enableOffline = require('./modules/offline')
const initMenu = require('./modules/menu')
// const notification = require('./modules/notification')
const renderMonthlyCalendars = require('./modules/calendar')

initMenu()
renderMonthlyCalendars()
// enableOffline()

// fetch(process.env.CALENDAR_API)
//     .then(response => response.json())
//     .then(notification)
//     // eslint-disable-next-line no-console
//     .catch(console.error)
