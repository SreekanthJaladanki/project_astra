window.onload = function () {
    var pageLoader = document.getElementById('page-loader');
    pageLoader.style.display = 'none';
}

// Function to update time and date
function updateTimeAndDate() {
    const datetimeElement = document.getElementById('datetime');
    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    const formattedDateTime = now.toLocaleString('en-US', options);

    datetimeElement.textContent = formattedDateTime;
}

// Update time and date every second
setInterval(updateTimeAndDate, 1000);
window.onload = function () {
    setTimeout(function () {
        document.getElementById('page-loader').style.display = 'none';
    }, 1000);
};