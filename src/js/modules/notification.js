const moment = require('moment')
require('moment/locale/es')

const bellElement = document.querySelector('.bell')

const storage = {}

const disableNotifications = function() {
    bellElement.classList.remove('active')
    clearTimeout(storage.notification)
}

const enableNotifications = function(months) {
    bellElement.classList.add('active')
    const event = months[0].events[0]
    const diff_millis = moment(event.date).diff(moment()).valueOf()
    const restante = moment.duration(diff_millis).humanize()
    storage.notification = setTimeout(function() {
        var notification = new Notification(event.eventName, {
            icon: 'assets/images/isotipo.png',
            body: `En ${restante} comienza ${event.eventName} en ${event.place}`,
        })
        notification.onclick = function() {
            window.open(event.eventLink)
        }
    }, 1000)
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
