const moment = require('moment')
require('moment/locale/es')

const bellElement = document.querySelector('.bell')

const storage = {}

const disableNotifications = function() {
    bellElement.classList.remove('active')
    clearTimeout(storage.notification)
}
const one_second = 1000;
const one_minute = one_second*60;
const one_hour = one_minute*60;

const enableNotifications = function(months) {
    bellElement.classList.add('active')
    const event = months[0].events[0]
    const diff_millis = moment(event.date).diff(moment()).valueOf()
    const restante = moment.duration(diff_millis).humanize()
    storage.notification = setTimeout(function() {
        const message = {
            body: `En ${restante} comienza ${event.eventName} en ${event.place}`,
            icon: 'assets/images/isotipo.png'
        }
        try {
            var notification = new Notification(event.eventName, message)
            notification.onclick = function() {
                window.open(event.eventLink)
            }
        } catch (e) {
            //maybe android?
            navigator.serviceWorker
                .ready
                .then(function(registration) {
                    registration.showNotification(event.eventName, message)
                })
        }
    }, diff_millis - one_hour);
}

module.exports = function(months) {
    bellElement.addEventListener('click', function() {
        if ('Notification' in window) {
            Promise.resolve(Notification.permission)
                .then(function(perm){
                    return perm !== 'granted' ? Notification.requestPermission() : perm
                })
                .then(function(perm){
                    if (perm !== 'granted') throw Error(perm)
                    return perm
                })
                .then(function(){
                    bellElement.classList.contains('active') ?
                        disableNotifications() :
                        enableNotifications(months)
                })
                .catch(function(err){
                    // eslint-disable-next-line no-console
                    console.log('err', err)
                })
        }
    })

    return Promise.resolve(months)
}
