const express = require("express");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.json({
    id: 1,
    nom: "Mayinzi",
    postnom: "Mukawa",
    prenom: "Joel",
    post: "Développeur fullstack",
  });
});

app.listen(port, () =>
  console.log("L'application a bien demarré sur le port" + " " + port)
);
