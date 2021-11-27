import mongoose from "mongoose";

const TimeSheetLogSchema = new mongoose.Schema(
  {
    taskId: { type: String },
    title: { type: String },
    day: { type: String },
    hour: { type: String },
    min: { type: String },
    note: { type: String },
  },
  { timestamps: true }
);
export default TimeSheetLogSchema;
