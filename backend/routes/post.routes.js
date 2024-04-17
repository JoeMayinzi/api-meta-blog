const express = require("express");
const {
  GetPosts,
  SetPosts,
  DeletePost,
  EditPost,
} = require("../controllers/posts.controller");

const Router = express.Router();

Router.get("/", GetPosts);
Router.post("/", SetPosts);
Router.delete("/:id", DeletePost);
Router.put("/:id", EditPost);

module.exports = Router;
