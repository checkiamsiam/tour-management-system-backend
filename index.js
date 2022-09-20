const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const fs = require("fs");
const port = process.env.PORT || 5000;
const colors = require("colors");
const handleError = require("./middleware/errorHandler/global.errorHandler");
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DB_URI_ATLAS)
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running at port ${port} with db connection`.yellow.bold);
    });
  })
  .catch((err) => {
    console.log(err);
  });

fs.readdirSync("./routes").map((route) => app.use("/api/v1", require("./routes/" + route)));

app.get("/", (req, res) => {
  res.send("Hello Server site is here!!!");
});

app.all("*", (req, res) => {
  res.status(404).send({success : false , message: "adress not found"});
});

app.use(handleError);
