const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
  console.log("MongoDB connection is ready");
});

mongoose.connection.on("error", (error) => {
  console.error(`Error ${error}`);
});

async function startMongoDb() {
  await mongoose.connect(process.env.MONGO_DB_URL);
}

module.exports = {
  startMongoDb,
};
