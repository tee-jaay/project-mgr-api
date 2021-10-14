import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  taskId: { type: String, required: true },
  commenterId: { type: String, required: true },
  comment: { type: String, required: true },
  file: { type: String },
});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
