const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const port = 3000;

connectDB();

const app = express();

// Middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("../backend/routes/post.routes"));

app.listen(port, () =>
  console.log("L'application a bien demarré sur le port" + " " + port)
);
