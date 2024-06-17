const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    currentDate: String,
    status: String,
    login: String,
    logout: String,
    workFromHomeTask: String,
    halfDayReason: String,
    incubationDetails: String,
});

module.exports = mongoose.model('Employee', employeeSchema);
