require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const semantleRoutes = require("./routes/semantleRoutes");

// Express app
const app = express();

// Adjust the maximum request payload size
app.use(bodyParser.json({ limit: "10mb" }));

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/", semantleRoutes);

// Connect to DB
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected to DB");
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Listening on port " + process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
