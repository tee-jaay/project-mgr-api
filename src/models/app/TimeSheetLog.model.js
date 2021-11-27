import mongoose from "mongoose";

const TimeSheetLogSchema = new mongoose.Schema(
  {
    day: { type: String },
    time: { type: String },
    note: { type: String },
  },
  { timestamps: true }
);
export default TimeSheetLogSchema;
