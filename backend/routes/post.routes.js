const express = require("express");
const { GetPosts } = require("../controllers/posts.controller");
const Router = express.Router();

Router.get("/", GetPosts);

Router.post("/", (req, res) => {
  res.status(200).json({ message: req.body.message });
});

Router.delete("/:id", (req, res) => {
  res.json({ message: "Element supprimé avec succès" + " " + req.params.id });
});

Router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: "element modifié avec succès" + " " + req.params.id });
});

module.exports = Router;
