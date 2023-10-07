const express = require("express");
const http = require("http");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const fileRoute = require("./Routes/fileRoutes");
const apiRoute = require("./Routes/apiRoutes");
const { DataBase } = require("./Utilities/dataBase");

const PORT = 3000;

const app = express();

const server = http.createServer(app);

DataBase("miniproject");

// setting  view engine
app.set("view engine", "ejs");

// middlewares
app.use(cookieParser())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));//
app.use(bodyParser.json());

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "Assets")));
app.use("/", fileRoute);
app.use("/api", apiRoute);

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
})