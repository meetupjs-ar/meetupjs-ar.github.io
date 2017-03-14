require('isomorphic-fetch')
const moment = require('moment')
require('moment/locale/es')

const body = document.querySelector('body')
const calendarElement = document.querySelector('#calendar')
const modal = document.querySelector('#modal')
const modalClose = document.querySelector('#modal-close')
const modalContent = document.querySelector('#modal-content')
const modalOutside = document.querySelector('#modal-outside')
const modalTitle = document.querySelector('#modal-title')
const modalWrapper = document.querySelector('#modal-wrapper')

function toggleModal () {
    body.classList.toggle('overflow-hidden')
    modal.classList.toggle('dn')
    modalWrapper.classList.toggle('fadeInDown')
}

function handleError (error) {
    // eslint-disable-next-line no-console
    console.error(error)

    document.querySelector('#loading').classList.add('dn')
    document.querySelector('#error-message').classList.remove('dn')
}

function renderMonthlyCalendars (monthlyCalendar) {
    return new Promise((resolve, reject) => {
        try {
            monthlyCalendar.forEach(calendar => {
                const gridId = `grid-${calendar.when.month}-${calendar.when.year}`
                const weekdaysId = `weekdays-${calendar.when.month}-${calendar.when.year}`

                calendarElement.insertAdjacentHTML(
                    'beforeend',
                    `<div class="fadeIn mv5">
                        <h2 class="black-alternative f2 mb4 mt0 normal tc ttc">
                            ${calendar.when.month} ${calendar.when.year}
                        </h2>
                        <div id="${weekdaysId}"
                            class="b--black-30 bl bt dn flex-l">
                        </div>
                        <div id="${gridId}"
                            class="b--black-30 br bt flex flex-wrap">
                        </div>
                    </div>`
                )

                const weekdaysElement = calendarElement.querySelector(`#${weekdaysId}`)

                moment.weekdays().forEach(weekday => {
                    weekdaysElement.insertAdjacentHTML(
                        'beforeend',
                        `<div class="b--black-30 bg-white black-50 br pv3 tc ttc w-one-seventh-l">
                            ${weekday}
                        </div>`
                    )
                })

                const gridElement = calendarElement.querySelector(`#${gridId}`)
                const monthNumber = parseInt(moment().month(calendar.when.month).format('MM')) - 1
                const currentMonth = moment({
                    day: 1,
                    month: monthNumber,
                    year: calendar.year
                })

                if (currentMonth.isoWeekday() !== 7) {
                    for (let i = currentMonth.isoWeekday(); i > 0; i--) {
                        gridElement.insertAdjacentHTML(
                            'beforeend',
                            `<div class="b--black-30 bb bg-near-white bl dn db-l w-one-seventh-l">
                            </div>`
                        )
                    }
                }

                const today = moment()

                for (let i = 1; i <= currentMonth.daysInMonth(); i++) {
                    const currentDay = moment({
                        day: i,
                        month: monthNumber,
                        year: calendar.year
                    })

                    gridElement.insertAdjacentHTML(
                        'beforeend',
                        `<div class="b--black-30 bb bl h4-l ph3 pv2 pa2-l w-100 w-one-seventh-l
                            ${currentDay.isBefore(today, 'day') ? 'bg-near-white dn db-l' : ''}
                            ${currentDay.isSame(today, 'day') ? 'bg-washed-green' : ''}">
                                <div class="flex flex-column-l h-100 items-center items-end-l">
                                    <div class="flex-auto-l order-1 order-0-l pl3 pl0-l w-80 w-100-l">
                                        <ul id="cell-${currentDay.format('DDMMYY')}"
                                            class="list ma0 pl0">
                                        </ul>
                                        <span class="black-30 dn f6 mt2 truncate">
                                        </span>
                                    </div>
                                    <div class="tc tr-l w-20 w-100-l">
                                        <span class="f3
                                            ${currentDay.isSame(today, 'day') ? 'green' : 'black-30'}">
                                                ${currentDay.format('DD')}
                                        </span>
                                        <span class="db dn-l f6 ttc
                                            ${currentDay.isSame(today, 'day') ? 'green' : 'black-30'}">
                                                ${currentDay.format('dddd')}
                                        </span>
                                    </div>
                                </div>
                        </div>`
                    )
                }

                let lastDayOfMonth = moment({
                    day: currentMonth.daysInMonth(),
                    month: monthNumber,
                    year: calendar.year
                })

                while (lastDayOfMonth.isoWeekday() != 6) {
                    gridElement.insertAdjacentHTML(
                        'beforeend',
                        `<div class="b--black-30 bb bg-near-white bl dn db-l w-one-seventh-l">
                        </div>`
                    )

                    lastDayOfMonth = lastDayOfMonth.add(1, 'day')
                }

                calendar.events.forEach(event => {
                    const eventDay = moment(event.date)
                    const list = gridElement.querySelector(`#cell-${eventDay.format('DDMMYY')}`)
                    const counter = list.nextElementSibling

                    list.parentNode.parentNode.parentNode.classList.add('pointer')
                    list.parentNode.parentNode.parentNode.classList.add('js-show-event-modal')

                    list.insertAdjacentHTML(
                        'beforeend',
                        `<li class="b--black-50 ba br1 f6 mv2 pa1 text-shadow-1 truncate white
                            ${list.childNodes.length > 2 ? 'dn-l' : ''}"
                            data-day="${eventDay.format('dddd DD')}"
                            data-hour="${eventDay.format('HH:mm')}"
                            data-event-name="${event.eventName}"
                            data-place="${event.place}"
                            data-place-address="${event.placeAddress}"
                            data-event-link="${event.eventLink}"
                            data-color="${event.color}"
                            style="background-color: ${event.color}; text-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);">
                                ${event.eventName}
                        </li>`
                    )

                    if (list.children.length > 2) {
                        counter.classList.add('db-l')
                        counter.textContent = `y ${list.children.length - 2} más`
                    }
                })
            })

            const events = document.querySelectorAll('.js-show-event-modal')

            for (let i = 0; i < events.length; i++) {
                events[i].addEventListener('click', function (event) {
                    event.preventDefault()

                    const currentCell = event.currentTarget
                    const eventList = currentCell.querySelectorAll('li')

                    modalContent.innerHTML = ''
                    modalTitle.innerHTML = eventList[0].dataset.day

                    for (let index = 0; index < eventList.length; index++) {
                        const eventData = eventList[index].dataset

                        modalContent.insertAdjacentHTML(
                            'beforeend',
                            `<div class="flex mh3 mv4">
                                <div class="w-30 w-20-ns">
                                    <p class="black-30 f3 mv0">
                                        ${eventData.hour}
                                    </p>
                                </div>
                                <div class="w-70 w-80-ns">
                                    <h3 class="f3 ma0"
                                        style="color: ${eventData.color};">
                                            ${eventData.eventName}
                                    </h3>
                                    <p class="black-50 mb3 mt2">${eventData.place}</p>
                                    <div class="flex">
                                        <a href="http://maps.google.com/?q=${eventData.placeAddress}"
                                            target="_blank"
                                            class="b b--black-10 ba bg-black-10 black-50 br1 dib f6 link ph3 pv2">
                                                Lugar
                                        </a>
                                        <a href="${eventData.eventLink}"
                                            target="_blank"
                                            class="b b--black-10 ba bg-black-10 black-50 br1 dib f6 link ml3 ph3 pv2">
                                                Evento
                                        </a>
                                    </div>
                                </div>
                            </div>`
                        )
                    }

                    toggleModal()
                })
            }

            modalClose.addEventListener('click', event => {
                event.preventDefault()

                toggleModal()
            })

            modalOutside.addEventListener('click', event => {
                if (event.target.id === 'modal-outside') {
                    event.preventDefault()

                    toggleModal()
                }
            })

            window.addEventListener('keydown', event => {
                if (event.keyCode === 27 && !modal.classList.contains('dn')) {
                    toggleModal()
                }
            })

            document.querySelector('#loading').classList.add('dn')

            resolve()
        } catch (error) {
            reject(error)
        }
    })
}

fetch(process.env.CALENDAR_API)
    .then(response => response.json())
    .then(renderMonthlyCalendars)
    .catch(handleError)
