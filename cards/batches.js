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
        showSuccessMessage();
    }, 1000);
}

function showSuccessMessage() {
    alert('Form submitted successfully!');
    // Here you can also redirect the user or perform any other action after successful submission
}

function showRefreshPreloader() {
    const refreshPreloader = document.getElementById('refresh-preloader');
    refreshPreloader.style.display = 'flex';
    setTimeout(function () {
        refreshPreloader.style.display = 'none';
    }, 1000);
}

showRefreshPreloader();