const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  empId: { type: String, required: true, unique: true },
  officialMail: { type: String, required: true, unique: true },
  personalMail: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  designation: { type: String, required: true },
  subject: { type: String, required: true },
  dateOfJoining: { type: Date, required: true },
  dateOfBirth: { type: Date, required: true },
  password: { type: String, required: true },
  status: { type: String, default: 'active' },
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('User', UserSchema);
