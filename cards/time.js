
window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'flex';
    setTimeout(function () {
        preloader.style.display = 'none';
    }, 1000); // Display preloader for 2 seconds
});

function showFields() {
    var status = document.getElementById("status");
    var loginLogoutFields = document.getElementById("loginLogoutFields");
    var workFromHomeTaskDiv = document.getElementById("workFromHomeTaskDiv");
    var halfDayReasonDiv = document.getElementById("halfDayReasonDiv");

    if (status.value === "Leave") {
        loginLogoutFields.style.display = "none";
        workFromHomeTaskDiv.style.display = "none";
        halfDayReasonDiv.style.display = "none";
    } else if (status.value === "Work from Home") {
        loginLogoutFields.style.display = "none";
        workFromHomeTaskDiv.style.display = "block";
        halfDayReasonDiv.style.display = "none";
    } else if (status.value === "Half Day") {
        loginLogoutFields.style.display = "block";
        workFromHomeTaskDiv.style.display = "none";
        halfDayReasonDiv.style.display = "block";
    } else {
        loginLogoutFields.style.display = "block";
        workFromHomeTaskDiv.style.display = "none";
        halfDayReasonDiv.style.display = "none";
    }
}

document.getElementById("employeeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("first");
    // Show submit preloader
    const submitPreloader = document.getElementById('submit-preloader');
    submitPreloader.style.display = 'flex';

    // Fetching form data
    const formData = new FormData(this);
    // Converting form data to JSON
    const formDataJSON = {};
    formData.forEach((value, key) => {
        formDataJSON[key] = value;
    });
    // Displaying form data
    console.log(formDataJSON);
    
    // Simulate form submission process
    setTimeout(function () {
        submitPreloader.style.display = 'none';
        alert("Form submitted successfully!");
        // Add actual form submission logic here, e.g., form.submit();
    }, 1000); // Simulate form submission delay
});
 

const submitFunction=()=>{
    const preloader = document.getElementById('submit-preloader');
    preloader.style.display = 'flex';
    setTimeout(function () {
        preloader.style.display = 'none';
    }, 1000)
    
}