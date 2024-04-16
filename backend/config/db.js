const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(
      "mongodb+srv://mayinzimukawa:hJaonwRqRSUhKMAd@cluster0.jvkdtoc.mongodb.net/meta-blog-api"
    );
    console.log("Data base connected successfuly");
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
