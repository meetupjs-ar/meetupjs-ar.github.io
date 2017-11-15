const moment = require('moment')

function calendarParser(rawCalendar) {
    return copyAndExtend(rawCalendar, { events: rawCalendar.events.map(eventParser) })
}

function eventParser(rawEvent) {
    return copyAndExtend(rawEvent, { date: moment(rawEvent.date).utc() })
}

function copyAndExtend(copyFrom, extendWith) {
    return Object.assign({}, copyFrom, extendWith)
}

module.exports = function calendarReducer(state = {}, action) {
    switch (action.type) {
    case 'CLOSE_MODAL':
        return copyAndExtend(state, { events: [] })
    case 'LOOKING_FOR_DATA':
        return copyAndExtend(state, { searching: true })
    case 'SHOW_ERROR':
        return copyAndExtend(state, { error: true, searching: false })
    case 'SHOW_MODAL':
        return copyAndExtend(state, { events: action.payload.slice(0) })
    case 'TAKE_AS_ORIGINALS':
        return copyAndExtend(state, {
            monthlyCalendars: action.payload.map(calendarParser),
            searching: false
        })
    default:
        return state
    }
}
