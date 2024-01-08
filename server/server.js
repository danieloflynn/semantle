require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/");

// Connect to DB
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected to DB");

    // Listen for requests
    app.listen(process.env.port, () => {
      console.log("Listening on port " + process.env.port);
    });
  })
  .catch((err) => console.log(err));

let db;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the app!" });
});
