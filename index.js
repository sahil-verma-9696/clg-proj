// Importing necessary modules and dependencies
const http = require("http");          // HTTP module for creating a server
const express = require("express");    // Express framework for building the app
const path = require("path");          // Path module for file paths
const cors = require("cors");          // CORS middleware for handling cross-origin requests
const database = require("./config/database"); // Database module for connecting to the database
const session = require("express-session"); // express-session for session management


// Import your custom routes module
const route = require("./routes/route"); 

// Define the port on which the server will run
const PORT = 3000;

// Create an Express application
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Connect to the database and specify the collection that is "miniproject"
database("miniproject");

// middleware function  
const sessionChecker = (req,res,next)=>{
  if(!req.session.user){
    res.redirect("/login")
    res.json({error:"user is not login"});
  }else{
    next()
  }
} 



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
  cookie: { expires: 600000 }
})
);

// if i access home route i am render on /login route
app.get("/", (req, res) => {
  res.redirect("/login");
})

// login
app.use("/login",(req,res,next)=>{req.session.user?res.redirect("/dashboard"):next()},express.static(path.join(__dirname, "/public/src/login")));

// dashboard
app.use("/dashboard",sessionChecker,express.static(path.join(__dirname, 'public/src/dashboard'))); 


// categories
app.use("/categories",express.static(path.join(__dirname,"public/src/category")))

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
