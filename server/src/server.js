const { startMongoDb } = require("../db/Database");
const app = require("./app");
const http = require("node:http");

require("dotenv").config();

// handling uncaught errors exception
process.on("uncaughtException", (error) => {
  console.log(`Error ${error.message}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

//config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: "/back/config/.env",
  });
}

//create server
const server = http.createServer(app);

async function startServer() {
  await startMongoDb();
  server.listen(process.env.PORT, () => {
    console.log(
      `Server is running on http://localhost:${process.env.PORT || 5000}`
    );
  });
}

startServer();

// unhandled promise rejection
process.on("unhandledRejection", (error) => {
  console.log(`Shutting down the server with ${error.message}`);
  console.log(`shutting down the server with unhandled rejection`);

  server.close(() => {
    process.exit(1);
  });
});
