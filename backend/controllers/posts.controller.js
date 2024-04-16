const PostModel = require("../models/post.model");

const GetPosts = async (req, res) => {
  const posts = await PostModel.find();

  if (!posts) {
    res.status(400).json({ message: "No data avaible" });
  }

  res.status(200).json(posts);
};

module.exports = { GetPosts };
