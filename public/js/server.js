const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Employee = require('./models/employee');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/employeeDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.post('/submit', async (req, res) => {
    const employeeData = new Employee(req.body);
    try {
        await employeeData.save();
        res.status(200).send({ message: 'Form submitted successfully' });
    } catch (error) {
        res.status(400).send({ message: 'Error submitting form', error });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
