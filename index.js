require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/login", (req, res) => {
  res.send("Login Page");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.listen(process.env.port, () => {
  console.log(`Server is running on port ${process.env.port}`);
});
