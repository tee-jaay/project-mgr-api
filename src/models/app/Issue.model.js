import mongoose from "mongoose";
import IssueCommentSchema from "./IssueComment.model.js";

const IssueSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    taskId: { type: String },
    projectId: { type: String, required: true },
    createdBy: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    bookmark: { type: Boolean, default: false },
    status: { type: String, enum: ["open", "closed"], default: "open" },
    start: { type: String },
    end: { type: String },
    priority: {
      type: String,
      enum: ["urgent", "low", "medium", "high"],
      default: "medium",
    },
    type: {
      type: String,
      enum: ["bug", "security", "feature", "upgrade", "update", "maintenance"],
      default: "update",
    },
    severity: {
      type: String,
      enum: ["minor", "major", "moderate", "critical"],
      default: "moderate",
    },
    comments: [IssueCommentSchema],
  },
  { timestamps: true }
);

const Issue = mongoose.model("Issue", IssueSchema);

export default Issue;
