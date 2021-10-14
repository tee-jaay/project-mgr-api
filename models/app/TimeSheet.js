import mongoose from "mongoose";

const TimeSheetSchema = new mongoose.Schema({
  taskId: { type: String, required: true },
  createdBy: { type: String, required: true },
  title: { type: String, required: true },
  day: { type: String },
  hour: { type: String },
  min: { type: String },
  note: { type: String },
});

const TimeSheet = mongoose.model("TimeSheet", TimeSheetSchema);

export default TimeSheet;
