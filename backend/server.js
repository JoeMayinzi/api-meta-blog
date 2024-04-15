const express = require("express");
const port = 3000;

const app = express();

app.use("/post", require("../backend/routes/post.routes"));

app.listen(port, () =>
  console.log("L'application a bien demarré sur le port" + " " + port)
);
