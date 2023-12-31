var daysElement = document.getElementById('days')
var hoursElement = document.getElementById('hours')
var minutesElement = document.getElementById('minutes')
var secondsElement = document.getElementById('seconds')

function countdownTimer() {
    const countdownDate = new Date('05/19/2024').getTime()
    /*const countdownDate = new Date('12/29/2023 15:15').getTime()*/

    // Convert to milliseconds
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    // Calculate each second
    const interval = setInterval(() => {
        // Find current date
        const currentDate = new Date().getTime()

        // Find difference between the two dates
        const dateDistance = countdownDate - currentDate

        daysElement.innerText = formatNumber(Math.floor(dateDistance / day))
        hoursElement.innerText = formatNumber(Math.floor((dateDistance % day) / hour))
        minutesElement.innerText = formatNumber(Math.floor((dateDistance % hour) / minute))
        secondsElement.innerText = formatNumber(Math.floor((dateDistance % minute) / second))

        // When the date is reached
        if (dateDistance < 0) {
            document.getElementById('headline').innerText = 'We are on the way!'
            document.getElementById('countdown').style.display = 'none'

            // End interval
            clearInterval(interval)
        }
    }, 1000);

}

// If number is only one digit, add a zero to the front
function formatNumber(number) { 
    if (number < 10) {
        return '0' + number
    }

    return number
}

countdownTimer()