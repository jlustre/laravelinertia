/**=====================
    Timer js
==========================**/
/***** CALCULATE THE TIME REMAINING *****/
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());

    /***** CONVERT THE TIME TO A USEABLE FORMAT *****/
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    /***** OUTPUT THE CLOCK DATA AS A REUSABLE OBJECT *****/
    return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
}

/***** DISPLAY THE CLOCK AND STOP IT WHEN IT REACHES ZERO *****/
function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    if (!clock) {
        console.error(`Element with id "${id}" not found.`);
        return;
    }

    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    if (!daysSpan || !hoursSpan || !minutesSpan || !secondsSpan) {
        console.error(`One or more child elements (.days, .hours, .minutes, .seconds) are missing in the element with id "${id}".`);
        return;
    }

    function updateClock() {
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock(); // run function once at first to avoid delay
    const timeinterval = setInterval(updateClock, 1000);
}

/***** SET A VALID END DATE *****/
var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
