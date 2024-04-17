const express = require("express");
const {
  GetPosts,
  SetPosts,
  DeletePost,
} = require("../controllers/posts.controller");
const Router = express.Router();

Router.get("/", GetPosts);
Router.post("/", SetPosts);
Router.delete("/:id", DeletePost);

Router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: "element modifié avec succès" + " " + req.params.id });
});

module.exports = Router;
