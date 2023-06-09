const express = require("express");

const app = express();

app.use(express.json());

//config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "/back/config/.env",
  });
}

module.exports = app;
