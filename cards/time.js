window.addEventListener('load', function () {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'flex';
    setTimeout(function () {
        preloader.style.display = 'none';
    }, 1000);
});

function showFields() {
    var status = document.getElementById("status").value;
    var loginLogoutFields = document.getElementById("loginLogoutFields");
    var workFromHomeTaskDiv = document.getElementById("workFromHomeTaskDiv");
    var halfDayReasonDiv = document.getElementById("halfDayReasonDiv");
    var incubationDetailsDiv = document.getElementById("incubationDetailsDiv");

    if (status === "Leave") {
        loginLogoutFields.style.display = "none";
        workFromHomeTaskDiv.style.display = "none";
        halfDayReasonDiv.style.display = "none";
        incubationDetailsDiv.style.display = "none";
    } else if (status === "Work from Home") {
        loginLogoutFields.style.display = "none";
        workFromHomeTaskDiv.style.display = "block";
        halfDayReasonDiv.style.display = "none";
        incubationDetailsDiv.style.display = "none";
    } else if (status === "Half Day") {
        loginLogoutFields.style.display = "block";
        workFromHomeTaskDiv.style.display = "none";
        halfDayReasonDiv.style.display = "block";
        incubationDetailsDiv.style.display = "none";
    } else if (status === "Incubation") {
        loginLogoutFields.style.display = "none";
        workFromHomeTaskDiv.style.display = "none";
        halfDayReasonDiv.style.display = "none";
        incubationDetailsDiv.style.display = "block";
    } else {
        loginLogoutFields.style.display = "block";
        workFromHomeTaskDiv.style.display = "none";
        halfDayReasonDiv.style.display = "none";
        incubationDetailsDiv.style.display = "none";
    }
}

function validateAndSubmit(event) {
    event.preventDefault();
    if (!validateFields()) {
        alert("Please fill all the fields.");
        return;
    }
    const submitPreloader = document.getElementById('submit-preloader');
    submitPreloader.style.display = 'flex';
    setTimeout(function () {
        submitPreloader.style.display = 'none';
        alert("Form submitted successfully!");
        document.getElementById("employeeForm").submit();
    }, 1000);
}

function validateFields() {
    const selectDate = document.getElementById("selectDate").value;
    const status = document.getElementById("status").value;
    const login = document.getElementById("login").value;
    const logout = document.getElementById("logout").value;
    const workFromHomeTask = document.getElementById("workFromHomeTask").value;
    const halfDayReason = document.getElementById("halfDayReason").value;
    const incubationDetails = document.getElementById("incubationDetails").value;

    if (!selectDate || !status) {
        return false;
    }

    if (status === "Present" && (!login || !logout)) {
        return false;
    }
    
    if (status === "Work from Home" && !workFromHomeTask) {
        return false;
    }
    
    if (status === "Half Day" && (!login || !logout || !halfDayReason)) {
        return false;
    }

    if (status === "Incubation" && !incubationDetails) {
        return false;
    }

    return true;
}
function validateAndSubmit(event) {
    event.preventDefault();
    if (!validateFields()) {
        alert("Please fill all the fields.");
        return;
    }
    const submitPreloader = document.getElementById('submit-preloader');
    submitPreloader.style.display = 'flex';
    setTimeout(function () {
        submitPreloader.style.display = 'none';
        // ("Form submitted successfully!");
        window.location.href = 'Thankyou.html'; // Redirect to Thankyou.html
    }, 1000);
}
