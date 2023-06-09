const ErrorHandler = require("../utils/errorHandler");

module.exports = (error, req, res, next) => {
  (error.statusCode = error.statusCode || 500),
    (error.message = error.message || "Internal server Error");

  // wrong mongodb
  if (error.name === "CastError") {
    const message = `Resources not found with this ID... Invalid ${error.path}`;

    error = new ErrorHandler(message, 400);
  }

  //Duplicate key error
  if (error.code === 11000) {
    const message = `Duplicate key ${Object.keys(error.keyValue)} Entered`;

    error = new ErrorHandler(message, 400);
  }

  //wrong jwt error
  if (error.name === "JsonWebTokenError") {
    const message = `Your url is invalid, please, try again letter `;
    error = new ErrorHandler(message, 400);
  }

  // jwt expired
  if (error.name === "TokenExpiredError") {
    const message = `Your url is expired. Please try again later`;

    error = new ErrorHandler(message, 400);
  }

  error.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
};
