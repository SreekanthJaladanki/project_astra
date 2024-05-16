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
    // Fetching form data
    const formData = new FormData(this);
    // Converting form data to JSON
    const formDataJSON = {};
    formData.forEach((value, key) => {
        formDataJSON[key] = value;
    });
    // Displaying form data
    console.log(formDataJSON);
    // You can add code to send this data to a server or perform any other action here
});
