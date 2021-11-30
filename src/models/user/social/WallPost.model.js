import mongoose from "mongoose";

const WallPostSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    postBy: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

const WallPost = mongoose.model("WallPost", WallPostSchema);

export default WallPost;
