const moment = require('moment')

function calendarParser(rawCalendar) {
    return Object.assign({}, rawCalendar, { events: rawCalendar.events.map(eventParser) })
}

function eventParser(rawEvent) {
    return Object.assign({}, rawEvent, { date: moment(rawEvent.date).utc() })
}

module.exports = function calendarReducer(state = [], action) {
    switch (action.type) {
    case 'LOOKING_FOR_DATA':
        return Object.assign({}, { searching: true })
    case 'SHOW_ERROR':
        return Object.assign({}, { error: true })
    case 'TAKE_AS_ORIGINALS':
        return Object.assign({}, { monthlyCalendars: action.payload.map(calendarParser) })
    default:
        return state
    }
}
