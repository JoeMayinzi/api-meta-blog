const express = require("express");
const controllers = require("../controllers/posts.controller");

const Router = express.Router();

Router.get("/", controllers.GetPosts);
Router.post("/", controllers.SetPosts);
Router.delete("/:id", controllers.DeletePost);
Router.put("/:id", controllers.EditPost);

module.exports = Router;
