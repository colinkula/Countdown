var daysElement = document.getElementById('days')
var hoursElement = document.getElementById('hours')
var minutesElement = document.getElementById('minutes')
var secondsElement = document.getElementById('seconds')

function countdownTimer() {
    // Set the target date for July 31, 2024, at 10:00 PM Chicago time (CDT)
    const targetDate = new Date(Date.UTC(2024, 6, 31, 22 - 5, 0, 0)); // 22 - 5 because CDT is UTC-5

    // Convert to milliseconds
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Function to format the numbers with leading zeros if needed
    function formatNumber(number) {
        return number < 10 ? '0' + number : number;
    }

    // Calculate each second
    const interval = setInterval(() => {
        // Find the current date in UTC
        const currentDate = new Date().getTime();

        // Find the difference between the two dates
        const dateDistance = targetDate - currentDate;

        // Calculate and display the time remaining
        document.getElementById('days').innerText = formatNumber(Math.floor(dateDistance / day));
        document.getElementById('hours').innerText = formatNumber(Math.floor((dateDistance % day) / hour));
        document.getElementById('minutes').innerText = formatNumber(Math.floor((dateDistance % hour) / minute));
        document.getElementById('seconds').innerText = formatNumber(Math.floor((dateDistance % minute) / second));

        // When the date is reached
        if (dateDistance < 0) {
            document.getElementById('headline').innerText = 'What a trip!';
            document.getElementById('countdown').style.display = 'none';

            // End interval
            clearInterval(interval);
        }
    }, 1000);
}

countdownTimer();

// Add event listener to the button to redirect to destinations page
document.getElementById('tripsBtn').addEventListener('click', function() {
    window.location.href = 'trips.html'; 
});

document.getElementById('contactBtn').addEventListener('click', function() {
    window.location.href = 'email.html'; 
});