const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    uid: { type: String },
    email: { type: String, required: true },
    password: { type: String },
    kids: { type: Boolean, default: false },
    smoke: { type: Boolean, default: false },
    age: { type: String }
});


const User = mongoose.model('User', userSchema);
module.exports = User;