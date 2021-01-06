const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const result = dotenv.config();
if (result.error) {
  console.log(result.error);
}

const app = express();

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("database connected");
  })
  .catch((e) => {
    console.log(e.message);
  });

app.get("/", (req, res) => res.send("Home Page Route"));

app.get("/about", (req, res) => res.send("About Page Route"));

app.get("/portfolio", (req, res) => res.send("Portfolio Page Route"));

app.get("/contact", (req, res) => res.send("Contact Page Route"));

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);
