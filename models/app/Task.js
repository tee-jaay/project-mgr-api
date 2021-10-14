import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  projectSlug: { type: String, required: true },
  createdBy: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  bookmark: { type: Number },
  status: { type: Number, default: 0 },
  plannedStart: { type: String },
  plannedEnd: { type: String },
  actualStart: { type: String },
  actualEnd: { type: String },
  priority: { type: String },
  color: { type: String },
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;
