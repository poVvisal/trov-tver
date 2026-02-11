const express = require("express");
require("dotenv").config();

const connectDB = require("./config/dbconnect");

const app = express();

connectDB();

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});