const moment = require('moment')

function calendarParser(rawCalendar) {
    return copyAndExtend(rawCalendar, { events: rawCalendar.events.map(eventParser) })
}

function copyAndExtend(copyFrom, extendWith) {
    return Object.assign({}, copyFrom, extendWith)
}

function eventParser(rawEvent) {
    return copyAndExtend(rawEvent, { date: moment(rawEvent.date).utc() })
}

function getEventsByName(monthlyCalendar, eventName) {
    return monthlyCalendar.events.filter(event =>
        event.eventName.toLowerCase().includes(eventName.toLowerCase())
    )
}

module.exports = function calendarReducer(state = {}, action) {
    switch (action.type) {
    case 'CLOSE_MODAL':
        return copyAndExtend(state, { events: [] })
    case 'FILTER_BY_EVENT_NAME':
        return copyAndExtend(state, {
            currentFilter: action.payload,
            monthlyCalendars: state.originals.map(monthlyCalendar =>
                    copyAndExtend(monthlyCalendar, {
                        events: getEventsByName(monthlyCalendar, action.payload)
                    })
                )
        })
    case 'LOOKING_FOR_DATA':
        return copyAndExtend(state, { searching: true })
    case 'SHOW_ERROR':
        return copyAndExtend(state, { error: true, searching: false })
    case 'SHOW_MODAL':
        return copyAndExtend(state, { events: action.payload.slice(0) })
    case 'TAKE_AS_ORIGINALS':
        return copyAndExtend(state, {
            monthlyCalendars: action.payload.map(calendarParser),
            originals: action.payload.map(calendarParser),
            searching: false
        })
    default:
        return state
    }
}
