import mongoose from "mongoose";
import TimeSheetLogSchema from "./TimeSheetLog.model.js";

const TimeSheetSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    projectId: { type: String, required: true },
    taskId: { type: String },
    task: { type: String },
    createdBy: { type: String, required: true },
    title: { type: String, required: true },
    logs: [TimeSheetLogSchema],
  },
  { timestamps: true }
);

const TimeSheet = mongoose.model("TimeSheet", TimeSheetSchema);

export default TimeSheet;
