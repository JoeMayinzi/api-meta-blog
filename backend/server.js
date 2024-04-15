const express = require("express");
const port = 3000;

const app = express();

// Middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("../backend/routes/post.routes"));

app.listen(port, () =>
  console.log("L'application a bien demarré sur le port" + " " + port)
);
