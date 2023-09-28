const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema();

module.exports =  mongoose.model("complaints_categ",complaintSchema);