const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

// Routes
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is running",
  });
});

// ... other routes will be added here ...

module.exports = app;
