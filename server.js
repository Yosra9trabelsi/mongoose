const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const DBconnect = require("./DBconnect");

app.use("/user", require("./routes/User"));

const PORT = process.env.PORT || 4000;
DBconnect();
app.listen(PORT, (err) => {
  try {
    console.log("server is running");
  } catch (error) {
    console.log(error);
  }
});
