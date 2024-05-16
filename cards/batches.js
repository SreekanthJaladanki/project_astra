document.getElementById("batchForm").addEventListener("submit", function(event) {
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
