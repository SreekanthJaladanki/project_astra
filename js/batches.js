window.addEventListener('load', function () {
    const preloader = document.getElementById('page-preloader');
    setTimeout(function () {
        preloader.style.display = 'none';
    }, 1000);
});

document.getElementById("batchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const formDataJSON = {};
    formData.forEach((value, key) => {
        formDataJSON[key] = value;
    });
    console.log(formDataJSON);
    showSubmitPreloader();
});

function showSubmitPreloader() {
    const submitPreloader = document.getElementById('submit-preloader');
    submitPreloader.style.display = 'flex';
    setTimeout(function () {
        submitPreloader.style.display = 'none';
        // alert('Form submitted successfully!');
        window.location.href = 'Thankyou.html';
         // Redirect to Thankyou.html
    }, 1000);
}

function showRefreshPreloader() {
    const refreshPreloader = document.getElementById('refresh-preloader');
    refreshPreloader.style.display = 'flex';
    setTimeout(function () {
        refreshPreloader.style.display = 'none';
    }, 1000);
}

showRefreshPreloader();