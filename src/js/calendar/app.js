const calendarReducer = require('./calendar-reducer')
const createStore = require('./create-store')
const debounce = require('lodash.debounce')
const flatten = require('lodash.flatten')
const html = require('yo-yo')
const moment = require('moment')
const uniq = require('lodash.uniq')

require('isomorphic-fetch')
require('moment/locale/es')

let bodyEl
let calendarEl
let errorEl
let filtersEl
let loadingEl
let modalContainerEl
let store

function closeModal() {
    store.dispatch({ type: 'CLOSE_MODAL' })
}

function closeModalOnEscapeKey(ev) {
    if (ev.keyCode === 27) closeModal()
}

function getCurrentMonthDays(currentMonth, events) {
    const currentMonthDays = []

    for (let i = 1; i <= currentMonth.daysInMonth(); i++) {
        const currentDay = moment({
            day: i,
            month: currentMonth.month(),
            year: currentMonth.year()
        })

        currentMonthDays.push({
            currentDay,
            events: events.filter(event => event.date.isSame(currentDay, 'day'))
        })
    }

    return currentMonthDays
}

function getLastMonthDays(currentMonth) {
    const lastMonthDays = []

    if (currentMonth.isoWeekday() !== 7) {
        for (let i = currentMonth.isoWeekday(); i > 0; i--) {
            lastMonthDays.push(i)
        }
    }

    return lastMonthDays
}

function getNextMonthDays(currentMonth) {
    let lastDayOfMonth = moment({
        day: currentMonth.daysInMonth(),
        month: currentMonth.month(),
        year: currentMonth.year()
    })
    const nextMonthDays = []

    while (lastDayOfMonth.isoWeekday() != 6) {
        nextMonthDays.push(Math.random())

        lastDayOfMonth = lastDayOfMonth.add(1, 'day')
    }

    return nextMonthDays
}

function init() {
    bodyEl = document.querySelector('body')
    calendarEl = document.querySelector('#calendar').appendChild(renderCalendars([]))
    errorEl = document.querySelector('#error').appendChild(renderError(false))
    filtersEl = document.querySelector('#filters').appendChild(renderFilters(false, ''))
    loadingEl = document.querySelector('#loading').appendChild(renderLoading(true))
    modalContainerEl = document.querySelector('#modal-container').appendChild(renderModal([]))

    store = createStore(calendarReducer)
}

function lookForData() {
    store.dispatch({ type: 'LOOKING_FOR_DATA' })

    fetch(process.env.CALENDAR_API)
        .then(response => response.json())
        .then(monthlyCalendars =>
            store.dispatch({
                type: 'TAKE_AS_ORIGINALS',
                payload: monthlyCalendars
            })
        )
        .catch(() => store.dispatch({ type: 'SHOW_ERROR' }))
}

function render() {
    const state = store.getState()
    const calendars =
        !!state.monthlyCalendars && state.monthlyCalendars.length ? state.monthlyCalendars : []

    html.update(calendarEl, renderCalendars(calendars))
    html.update(errorEl, renderError(!!state.error))
    html.update(filtersEl, renderFilters(calendars, state.currentFilter))
    html.update(loadingEl, renderLoading(state.searching))
    html.update(modalContainerEl, renderModal(state.events))
}

function renderCalendars(calendars) {
    return html`<div class="fade-in ${calendars.length ? 'db' : 'dn'}">
        <h1 class="black-alternative f3 f2-ns mv0 normal pb4 pt0 tc">Calendario de eventos</h1>
        ${calendars.map(calendar => {
            const monthNumber =
                parseInt(
                    moment()
                        .month(calendar.when.month)
                        .format('MM')
                ) - 1
            const currentMonth = moment({
                day: 1,
                month: monthNumber,
                year: calendar.when.year
            })

            return html`<div class="mb5">
                <h2 class="f4 f3-ns mb4 mt0 normal silver tc ttc">
                    ${calendar.when.month} ${calendar.when.year}
                </h2>
                ${renderWeekdays()}
                ${renderDays(calendar.events, currentMonth)}
            </div>`
        })}
    </div>`
}

function renderDays(events, currentMonth) {
    const currentMonthDays = getCurrentMonthDays(currentMonth, events)
    const lastMonthDays = getLastMonthDays(currentMonth)
    const nextMonthDays = getNextMonthDays(currentMonth)
    const today = moment()

    return html`<div class="b--black-10 br bt bw1 flex flex-wrap">
        ${lastMonthDays.map(renderLastMonthDay)}
        ${currentMonthDays.map(currentDay => renderMonthDays(today, currentDay))}
        ${nextMonthDays.map(renderNextMonthDay)}
    </div>`
}

function renderError(show) {
    return html`<div class="fade-in f4 f3-ns pv5 silver tc ${show ? 'db' : 'dn'}">
        <p class="mv0">Ups! Ocurrió un error (:</p>
        <button class="b b--black-10 ba bg-yellow-alternative black-alternative br2 bw1 f6 grow link mt4 ph3 pointer pv2 ttu"
            onclick="${lookForData}">
                Intentar nuevamente
        </button>
    </div>`
}

function renderEventsDay(events) {
    return html`<div class="flex-auto-l order-1 order-0-l pl3 pl0-l w-80 w-100-l">
        <ul class="list ma0 pl0">
            ${events.map(function(event, index) {
                return html`<li class="b--black-30 ba br1 bw1 f6 mv2 pa1 text-shadow-1 truncate white ${
                    index > 1 ? 'dn-l' : ''
                }"
                    style="background-color: ${event.color};">${event.eventName}</li>`
            })}
        </ul>
        <span class="black-30 dn f6 mt2 truncate ${events.length > 2 ? 'db-l' : ''}">
            y ${events.length - 2} más
        </span>
    </div>`
}

function renderFilters(calendars, currentFilter) {
    const eventNames = calendars.length
        ? calendars.map(calendar => calendar.events.map(event => event.eventName))
        : []
    const eventPlaces = calendars.length
        ? calendars.map(calendar =>
              calendar.events.map(event => event.place).filter(eventPlace => !!eventPlace)
          )
        : []
    const allSuggestionWithDuplicates = flatten(eventNames)
        .concat(flatten(eventPlaces))
        .sort()
    const suggestions = uniq(allSuggestionWithDuplicates)
        .filter(
            suggestion =>
                suggestion &&
                currentFilter &&
                suggestion.toLowerCase().includes(currentFilter.toLowerCase())
        )
        .slice(0, 10)

    return html`<div class="center fade-in mw9 pv5 ${calendars.length ? 'db' : 'dn'}">
        <input list="suggestions" type="text" class="b--black-10 ba black-alternative br2 bw1 db droid flex-auto input-reset lh-solid outline-0 ph3 pv2 w-100"
            placeholder="Buscar por nombre o lugar..." value="${currentFilter ||
                ''}" onkeyup=${debounce(search, 250)}>
        <datalist id="suggestions">
            ${suggestions.map(suggestion => html`<option value="${suggestion}">`)}
        </datalist>
    </div>`
}

function renderFooterDay(currentDay, today) {
    return html`<div class="tc tr-l w-20 w-100-l">
        <span class="f3 ${currentDay.isBefore(today, 'day') ? 'strike' : ''} ${
        currentDay.isSame(today, 'day') ? 'green' : 'black-30'
    }">
            ${currentDay.format('DD')}
        </span>
        <span class="db dn-l f6 ttc ${currentDay.isSame(today, 'day') ? 'green' : 'black-30'}">
            ${currentDay.format('dddd')}
        </span>
    </div>`
}

function renderLastMonthDay() {
    return html`<div class="b--black-10 bb bg-near-white bl bw1 dn db-l w-one-seventh-l"></div>`
}

function renderLoading(show) {
    return html`<p class="f4 f3-ns fade-in ma0 pv5 silver tc ${show ? 'db' : 'dn'}">
        Buscando eventos...
    </p>`
}

function renderModal(events) {
    const shouldRenderModal = events && events.length

    if (shouldRenderModal) {
        bodyEl.classList.add('overflow-hidden')
        window.addEventListener('keydown', closeModalOnEscapeKey)
    } else {
        bodyEl.classList.remove('overflow-hidden')
        window.removeEventListener('keydown', closeModalOnEscapeKey)
    }

    return html`<div class="bg-black-70 fade-in fixed items-center justify-center left-0 pointer top-0 vh-100 w-100 z-2 ${
        shouldRenderModal ? 'flex' : 'dn'
    }" onclick=${function(ev) {
        if (ev.target === ev.currentTarget) closeModal()
    }}>
        <div id="modal-wrapper" class="center cursor-default fade-in-down mw6 w-100">
            <div class="bg-white br2 ma3">
                <div class="b--black-10 bb bg-washed-yellow br--top br2 bw1 flex items-center justify-between ph3 pv2">
                    <span id="modal-title" class="b black-alternative dib f4 ttc">${
                        shouldRenderModal ? events[0].date.format('dddd DD') : ''
                    }</span>
                    <span id="modal-close" class="f-30-px grow ion-android-close pointer silver" onclick=${function() {
                        closeModal()
                    }}></span>
                </div>
                <div class="mh-75 overflow-y-auto">
                    <div id="modal-content">
                        ${shouldRenderModal ? events.map(renderModalEvent) : ''}
                    </div>
                </div>
            </div>
        </div>
    </div>`
}

function renderModalEvent(event) {
    return html`<div class="flex mh3 mv3 pv3">
        <div class="w-30 w-20-ns">
            <p class="f4 f3-ns mv0 silver">${event.date.format('HH:mm')}</p>
        </div>
        <div class="w-70 w-80-ns">
            <h3 class="f4 f3-ns mv0"
                style="color: ${event.color};">
                    ${event.eventName}
            </h3>
            ${event.place ? html`<p class="black-30 mb0 mt2">${event.place}</p>` : ''}
            <div class="flex">
                <a href="${event.eventLink}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="b b--black-30 ba br1 bw1 dib f6 flex grow items-center link mt3 ph3 ttu white" style="background-color: ${
                        event.color
                    };">
                        <span class="black-30 f-30-px ion-link mr2"></span>
                        <span class="text-shadow-1">Link</span>
                </a>
            </div>
        </div>
    </div>`
}

function renderMonthDays(today, currentDayInfo) {
    const { currentDay, events } = currentDayInfo

    return html`<div class="b--black-10 bb bl bw1 h4-l ph3 pv2 pa2-l w-100 w-one-seventh-l
        ${currentDay.isBefore(today, 'day') ? 'bg-near-white dn db-l' : ''}
        ${currentDay.isSame(today, 'day') ? 'bg-washed-green' : ''}
        ${events.length ? 'pointer' : ''}"
        onclick=${function() {
            if (!events.length) return

            store.dispatch({
                type: 'SHOW_MODAL',
                payload: events
            })
        }}>
        <div class="flex flex-column-l h-100 items-center items-end-l">
            ${renderEventsDay(events)}
            ${renderFooterDay(currentDay, today)}
        </div>
    </div>`
}

function renderNextMonthDay() {
    return html`<div class="b--black-10 bb bg-near-white bl bw1 dn db-l w-one-seventh-l">
    </div>`
}

function renderWeekday(weekday) {
    return html`<div class="b--black-10 bg-white black-alternative br bw1 pv3 tc ttc w-one-seventh-l">
        ${weekday}
    </div>`
}

function renderWeekdays() {
    return html`<div class="b--black-10 bl bt bw1 dn flex-l">
        ${moment.weekdays().map(renderWeekday)}
    </div>`
}

function search() {
    store.dispatch({ type: 'FILTER_BY_EVENT_NAME', payload: this.value })
}

module.exports = function calendarApp() {
    init()

    store.subscribe(render)

    lookForData()
}
