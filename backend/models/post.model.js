const mongoose = require("mongoose");

const PostModel = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },

    content: {
      type: String,
      require: true,
    },

    author: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    featuredImg: {
      type: String,
      require: true,
    },
    articleImg: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", PostModel);
