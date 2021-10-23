import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    id: { type: "string", required: true, unique: true },
    taskId: { type: String, required: true },
    commenterId: { type: String, required: true },
    comment: { type: String, required: true },
    file: { type: String },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
