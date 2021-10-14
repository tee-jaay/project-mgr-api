import mongoose from "mongoose";

const MeetingSchema = new mongoose.Schema({
  taskId: { type: String, required: true },
  createdBy: { type: String, required: true },
  title: { type: String, required: true },
  bookmark: { type: Number },
  status: { type: Number },
  date: { type: String },
  time: { type: String },
  duration: { type: String },
  agenda: { type: String },
});

const Meeting = mongoose.model("Meeting", MeetingSchema);

export default Meeting;
