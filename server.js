const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
    console.log(DB_HOST);
    console.log(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
