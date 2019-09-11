'use strict';

function digitalClock() {
    let date, hours, minutes, sec, day, weekDays, clockResult;
    weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    date = new Date();
    day = date.getDay();
    hours = date.getHours();
    minutes = date.getMinutes();
    sec = date.getSeconds();
    //check to support two digits
    if(hours.length < 2) {
    hours= '0' + hours;
    }
    if(minutes.length < 2) {
        minutes = '0' + minutes;
    }
    if(sec.length < 2) {
    sec = '0' + sec;
    }
     clockResult = weekDays[day] + ' '+ hours + ':'+ minutes + ':'+ sec;
    console.log(clockResult);
    //DOM
    document.querySelector('#clock').innerHTML = clockResult;
}
digitalClock();
setInterval(digitalClock, 1000);