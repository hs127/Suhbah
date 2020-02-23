const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require('bcryptjs');

const homeSchema = new Schema({
    username: { type: String },
    uid: { type: String },
    email: { type: String, required: true },
    password: { type: String },
    kids: { type: Boolean, default: false },
    smoke: { type: Boolean, default: false },
    age: { type: String },
    pets: { type: Boolean, default: false },
    placeInd: { type: Boolean, default: false },
    loggedIn: { type: Boolean, default: false },
    practicing: { type: String }
});


const Home = mongoose.model('Home', userSchema);
module.exports = Home;