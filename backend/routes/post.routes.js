const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.json({
    id: 1,
    nom: "Mayinzi",
    postnom: "Mukawa",
    prenom: "Joel",
    post: "Développeur fullstack",
  });
});

module.exports = Router;
