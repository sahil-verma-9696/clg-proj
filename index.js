// Importing necessary modules and dependencies
const http = require("http");          // HTTP module for creating a server
const express = require("express");    // Express framework for building the app
const path = require("path");          // Path module for file paths
const cors = require("cors");          // CORS middleware for handling cross-origin requests
const database = require("./config/database"); // Database module for connecting to the database
const session = require("express-session"); // express-session for session management


// Import your custom routes module
const route = require("./routes/route"); 
const {sessionChecker} = require("./middleware/sessionChecker");

// Define the port on which the server will run
const PORT = 3000;

// Create an Express application
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Connect to the database and specify the collection that is "miniproject"
database("miniproject");

// Parse incoming JSON data from requests
app.use(express.json());

// Handle CORS issues, by corse middleware allowing cross-origin requests
app.use(cors());

// session middleware
app.use(session({
  key: "AuthUser",
  secret: "randomtext",
  resave: false,
  saveUninitialized: false,
  cookie: { expires: 60000 }
})
);

// if i access home route i am render on /login route
app.get("/", sessionChecker, (req, res) => {
  res.redirect("/login");
})

// dashboard
app.use("/dashboard",express.static(path.join(__dirname, 'public/src/dashboard')));

// login
app.use("/login", express.static(path.join(__dirname, "/public/src/login")));

// registration
app.use("/registration", express.static(path.join(__dirname, "/public/src/registration")));

// api routes
app.use("/api", route);

// default route 
app.use("*",(req,res)=>{
  res.redirect("/dashboard")
})

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
