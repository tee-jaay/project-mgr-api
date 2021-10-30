import mongoose from "mongoose";

const IssueSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    taskId: { type: String },
    projectId: { type: String, required: true },
    createdBy: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    bookmark: { type: String },
    status: { type: String, enum: ["open", "closed"] },
    start: { type: String },
    end: { type: String },
    priority: { type: String, enum: ["critical", "low", "medium", "high"] },
    type: {
      type: String,
      enum: ["bug", "feature", "upgrade", "update", "maintenance"],
    },
    severity: {
      type: String,
      enum: ["minor", "major", "moderate", "critical"],
    },
  },
  { timestamps: true }
);

const Issue = mongoose.model("Issue", IssueSchema);

export default Issue;
