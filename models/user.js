const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: { type: String },
    uid: { type: String },
    email: { type: String, required: true },
    password: { type: String },
    kids: { type: Boolean, default: false },
    smoke: { type: Boolean, default: false },
    age: { type: String },
    pets: { type: Boolean, default: false },
    placeInd: { type: String },
    loggedIn: { type: Boolean, default: false },
    submitProfile: { type: Boolean, default: false },
    practicing: { type: String },
    listingName: { type: String },
    rentPay: { type: Number },
    rentDuration: { type: String },
    homeType: { type: String },
    moveInDate: { type: String },
    moveOutDate: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
    addComments: { type: String },
    submitHousing: { type: Boolean, default: false }
    // home: [
    //     {
    //         // Store ObjectIds in the array
    //         type: Schema.Types.ObjectId,
    //         // The ObjectIds will refer to the ids in the Note model
    //         ref: "Home"
    //     }
    // ]
});


const User = mongoose.model('User', userSchema);
module.exports = User;