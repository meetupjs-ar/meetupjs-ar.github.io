const bel = require('bel')
const calendarReducer = require('./calendar-reducer')
const createStore = require('./create-store')
const moment = require('moment')

require('isomorphic-fetch')
require('moment/locale/es')

let calendarEl
let errorEl
let filtersEl
let loadingEl
let store

function clearNode(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild)
    }
}

function init() {
    calendarEl = document.querySelector('#calendar')
    errorEl = document.querySelector('#error')
    filtersEl = document.querySelector('#filters')
    loadingEl = document.querySelector('#loading')

    store = createStore(calendarReducer)
}

function render() {
    const state = store.getState()
    const calendars =
        !!state.monthlyCalendars && state.monthlyCalendars.length ? state.monthlyCalendars : []

    renderLoading(!!state.searching)
    renderError(!!state.error)
    renderFilters(calendars.length)
    renderCalendars(calendars)
}

function renderCalendars(calendars) {
    clearNode(calendarEl)

    if (!calendars.length) return

    calendarEl.appendChild(
        bel`<h1 class="black-alternative f3 f2-ns mv0 normal pb4 pt0 tc">Calendario de eventos</h1>`
    )

    calendars.forEach(calendar => {
        const monthNumber =
            parseInt(
                moment()
                    .month(calendar.when.month)
                    .format('MM')
            ) - 1
        const currentMonth = moment({
            day: 1,
            month: monthNumber,
            year: calendar.year
        })

        calendarEl.appendChild(
            bel`<div class="fadeIn mb5">
                <h2 class="f4 f3-ns mb4 mt0 normal silver tc ttc">
                    ${calendar.when.month} ${calendar.when.year}
                </h2>
                ${renderWeekdays()}
                ${renderDays(currentMonth)}
            </div>`
        )
    })
}

function renderDays(currentMonth) {
    let lastMonthDays = []

    if (currentMonth.isoWeekday() !== 7) {
        for (let i = currentMonth.isoWeekday(); i > 0; i--) {
            lastMonthDays.push(i)
        }
    }

    return bel`<div class="b--black-10 br bt bw1 flex flex-wrap">
        ${lastMonthDays.map(renderLastMonthDay)}
    </div>`
}

function renderError(error) {
    clearNode(errorEl)

    error &&
        errorEl.appendChild(
            bel`<p class="f4 f3-ns mv0 pv5 silver tc">
                Ups! Ocurrió un error (:
            </p>`
        )
}

function renderFilters(hasEvents) {
    clearNode(filtersEl)

    hasEvents &&
        filtersEl.appendChild(
            bel`<div class="center mw9 ph3 pv5">
                <input id="filter" type="text" class="b--black-10 ba black-alternative br2 bw1 db flex-auto input-reset outline-0 ph3 pv2 w-100"
                    placeholder="Buscar por nombre de evento..."></input>
            </div>`
        )
}

function renderLastMonthDay() {
    return bel`<div class="b--black-10 bb bg-near-white bl bw1 dn db-l w-one-seventh-l"></div>`
}

function renderLoading(show) {
    clearNode(loadingEl)

    show &&
        loadingEl.appendChild(
            bel`<p class="f4 f3-ns ma0 pv5 silver tc">
                Buscando eventos...
            </p>`
        )
}

function renderWeekday(weekday) {
    return bel`<div class="b--black-10 bg-white black-alternative br bw1 pv3 tc ttc w-one-seventh-l">
        ${weekday}
    </div>`
}

function renderWeekdays() {
    return bel`<div class="b--black-10 bl bt bw1 dn flex-l">
        ${moment.weekdays().map(renderWeekday)}
    </div>`
}

module.exports = function calendarApp() {
    init()

    store.subscribe(render)
    store.dispatch({
        type: 'LOOKING_FOR_DATA'
    })

    fetch(process.env.CALENDAR_API)
        .then(response => response.json())
        .then(monthlyCalendars => {
            store.dispatch({
                type: 'TAKE_AS_ORIGINALS',
                payload: monthlyCalendars
            })
        })
        .catch(() => {
            store.dispatch({
                type: 'SHOW_ERROR'
            })
        })
}
