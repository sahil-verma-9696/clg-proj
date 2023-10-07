const express = require("express");

const controle = require("./../Controllers/apiControler");

const route = express.Router();

route.post("/login",controle.login);
route.post("/complaint",controle.complaint)

route.get("/logout",controle.logout);


// route.get("/mail",controle.mailSender);

module.exports = route