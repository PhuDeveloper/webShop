require("dotenv").config();
const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(process.env.MONGOOSE_URL, {
      connectTimeoutMS: 30000,
    })
    .then(() => {
      console.log("Connected database succsess!!!");
    })
    .catch((err) => console.log("err", err));
};

module.exports = connect;
