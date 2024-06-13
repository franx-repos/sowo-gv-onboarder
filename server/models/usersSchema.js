import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    unique: true,
    trim: true,
  },
  author: {
    type: String,
    required: [true, "author is required"],
  },
  image_url: {
    type: String,
  },
  tags: {
    type: [String],
    default: "NEW",
  },
});

export default mongoose.model("User", userSchema);
