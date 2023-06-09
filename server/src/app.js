const express = require("express");
const ErrorHandler = require("../utils/errorHandler");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

//config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "/back/config/.env",
  });
}

// it's for error handling
app.use(ErrorHandler);

module.exports = app;
