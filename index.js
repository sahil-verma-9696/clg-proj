const express = require('express');
const app = express();
const path = require('path');
const route = require("./routes/route");

const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use("/api",route)



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
