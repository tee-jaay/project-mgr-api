import mongoose from "mongoose";

const IssueSchema = new mongoose.Schema(
  {
    id: { type: "string", required: true, unique: true },
    taskId: { type: String, required: true },
    createdBy: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    bookmark: { type: Number },
    status: { type: Number },
    plannedStart: { type: String },
    plannedEnd: { type: String },
    priority: { type: Number },
    type: { type: Number },
    severity: { type: Number },
  },
  { timestamps: true }
);

const Issue = mongoose.model("Issue", IssueSchema);

export default Issue;
