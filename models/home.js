const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require('bcryptjs');

const homeSchema = new Schema({
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
});


const Home = mongoose.model('Home', homeSchema);
module.exports = Home;