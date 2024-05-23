
// Function to update time and date
function updateTimeAndDate() {
    const datetimeElement = document.getElementById('datetime');
    const now = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedDateTime = now.toLocaleString('en-US', options);

    datetimeElement.textContent = formattedDateTime;
}

// Update time and date every second
setInterval(updateTimeAndDate, 1000);

// Preloader logic for initial page load
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    setTimeout(function() {
        preloader.style.display = 'none';
    }, 2000); // Display preloader for 2 seconds
});

// Preloader logic for card clicks
function showCardPreloader(page) {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'flex';

    setTimeout(function() {
        window.location.href = page;
    }, 2000); // Display preloader for 2 seconds before redirecting
}
