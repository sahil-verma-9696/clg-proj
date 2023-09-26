const express = require("express");
const controlls = require("./../controller/controller")
const route = express.Router();

route.post("/register",controlls.registration);
route.post("/login",controlls.login);
route.post("/logout",controlls.logout);
route.post("/session",controlls.session);


module.exports = route;