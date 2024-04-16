const PostModel = require("../models/post.model");

const GetPosts = async (req, res) => {
  const posts = await PostModel.find();

  if (!posts) {
    res.status(400).json({ message: "No data avaible" });
  }

  res.status(200).json(posts);
};

const SetPosts = async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "Veillez ajouter un article" });
  }

  const post = PostModel.create({
    title: req.title,
    content: req.body.content,
  });

  res.status(200).json(post);
};

module.exports = { GetPosts, SetPosts };
