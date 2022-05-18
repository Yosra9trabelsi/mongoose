const mongoose = require("mongoose");

const DBconnect = async () => {
  try {
    let result = await mongoose.connect("mongodb://localhost:27017/myshop");
    console.log("database conncted");
  } catch (error) {
    console.log(error);
  }
};
module.exports = DBconnect;
