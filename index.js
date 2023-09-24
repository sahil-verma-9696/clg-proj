// Importing necessary modules and dependencies
const http = require("http");          // HTTP module for creating a server
const express = require("express");    // Express framework for building the app
const path = require("path");          // Path module for file paths
const cors = require("cors");          // CORS middleware for handling cross-origin requests
const database = require("./config/database"); // Database module for connecting to the database

// Import your custom routes module
const route = require("./routes/route");

// Define the port on which the server will run
const PORT = 3000;

// Create an Express application
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse incoming JSON data from requests
app.use(express.json());

// Handle CORS issues, by corse middleware allowing cross-origin requests
app.use(cors());

// Define API routes under the '/api' path using the 'route' module
app.use("/api", route);

// Connect to the database and specify the collection that is "miniproject"
database("miniproject");

// Start the server and listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
