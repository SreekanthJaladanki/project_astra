function showNoOfBatchesField() {
    var selectTask = document.getElementById("selectTask");
    var noOfBatchesField = document.getElementById("noOfBatchesField");

    if (selectTask.value === "Taking batches") {
        noOfBatchesField.style.display = "block";
    } else {
        noOfBatchesField.style.display = "none";
    }
}

function addTask() {
    var selectTask = document.getElementById("selectTask");
    var noOfBatches = document.getElementById("noOfBatches");
    var taskList = document.getElementById("taskList");

    var task = selectTask.value;
    if (task === "Taking batches") {
        task += " (" + noOfBatches.value + " batches)";
    }

    var div = document.createElement("div");
    div.textContent = task;
    taskList.appendChild(div);

    // Enable submit button
    document.getElementById("submitBtn").disabled = false;
}

document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Perform submission actions here
    document.getElementById("submitMessage").style.display = "block";
});
