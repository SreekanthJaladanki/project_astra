const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, empId, officialMail, personalMail, phoneNumber, designation, subject, dateOfJoining, dateOfBirth, password } = req.body;

  try {
    const user = new User({
      name,
      empId,
      officialMail,
      personalMail,
      phoneNumber,
      designation,
      subject,
      dateOfJoining,
      dateOfBirth,
      password,
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Error registering user' });
  }
});

module.exports = router;
