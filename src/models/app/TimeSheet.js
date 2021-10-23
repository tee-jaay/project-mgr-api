import mongoose from "mongoose";

const TimeSheetSchema = new mongoose.Schema(
  {
    id: { type: "string", required: true, unique: true },
    taskId: { type: String, required: true },
    createdBy: { type: String, required: true },
    title: { type: String, required: true },
    day: { type: String },
    hour: { type: String },
    min: { type: String },
    note: { type: String },
  },
  { timestamps: true }
);

const TimeSheet = mongoose.model("TimeSheet", TimeSheetSchema);

export default TimeSheet;
