import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    id: { type: "string", required: true, unique: true },
    projectId: { type: String, required: true },
    createdBy: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    bookmark: { type: String },
    status: {
      type: String,
      enum: ["active", "cancelled", "completed", "review", "not started"],
    },
    plannedStart: { type: String },
    plannedEnd: { type: String },
    actualStart: { type: String },
    actualEnd: { type: String },
    priority: { type: String, enum: ["Critical", "Low", "Medium", "High"] },
    color: { type: String },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);

export default Task;
