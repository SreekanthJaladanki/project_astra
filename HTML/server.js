const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/formDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a schema and model for the form data
const formSchema = new mongoose.Schema({
    name: { type: String, required: true },
    empId: { type: String, required: true },
    officialMail: { type: String, required: true },
    personalMail: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    designation: { type: String, required: true },
    subject: { type: String, required: true },
    dateofjoining: { type: Date, required: true },
    dateofbirth: { type: Date, required: true },
    password: { type: String, required: true }
});

const FormData = mongoose.model('FormData', formSchema);

const app = express();

// Middleware to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const formData = new FormData({
        name: req.body.name,
        empId: req.body.empId,
        officialMail: req.body.officialMail,
        personalMail: req.body.personalMail,
        phoneNumber: req.body.phoneNumber,
        designation: req.body.designation,
        subject: req.body.subject,
        dateofjoining: req.body.dateofjoining,
        dateofbirth: req.body.dateofBirth,
        password: req.body.password
    });

    formData.save((err) => {
        if (err) {
            res.send('Error saving data to database.');
        } else {
            res.send('Data saved successfully.');
        }
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
