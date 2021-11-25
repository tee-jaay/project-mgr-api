import mongoose from "mongoose";

const IssueCommentSchema = new mongoose.Schema(
  {
    commentBy: { type: String },
    text: { type: String },
  },
  { timestamps: true }
);

export default IssueCommentSchema;
