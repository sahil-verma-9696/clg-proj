const express = require("express");
const controlls = require("./../controller/controller")
const route = express.Router();

route.post("/register",controlls.registration)

module.exports = route;