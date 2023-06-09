require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connect = require("./config/connectDb");
const app = express();

app.use(bodyParser.json()); // Xử lý dữ liệu JSON
app.use(bodyParser.urlencoded({ extended: false })); // Xử lý dữ liệu từ form
app.use(cors());
app.use(morgan("common"));

const port = process.env.PORT;

connect();

// ROUTER

app.use("/user", userRouter);
// console.log("port", port);
app.listen(port, () => {
  console.log(`Start server port ${port}`);
});
