const express = require("express");

const controle = require("../Controllers/fileControler");

const route = express.Router();

route.use("/", controle.serveHome);
route.use("/login", (req, res, next) => { req.cookies.user ? res.redirect("/categories") : next() }, controle.serveLogin);
route.use("/comp_faculty", (req, res, next) => { !req.cookies.user ? res.redirect("/login") : next() },controle.serveCompForm_faculty);
route.use("/categories",controle.serveCategories)


module.exports = route