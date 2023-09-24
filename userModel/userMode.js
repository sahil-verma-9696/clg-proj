const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
    userName : String,
    password : String,
    contact : Number
});

module.exports = mongoose.model("registration",registrationSchema)