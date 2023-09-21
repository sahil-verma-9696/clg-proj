const express = require("express");
const controls = require("./../controller/controller")
const route = express();


route.get("/register",controls.register)


module.exports = route