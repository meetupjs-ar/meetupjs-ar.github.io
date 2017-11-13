module.exports = function calendarReducer(state = [], action) {
    switch (action.type) {
    case 'TAKE_AS_ORIGINALS':
        return Object.assign({}, { monthlyCalendars: action.payload.slice(0) })
    case 'LOOKING_FOR_DATA':
        return Object.assign({}, { searching: true })
    case 'SHOW_ERROR':
        return Object.assign({}, { error: true })
    default:
        return state
    }
}
