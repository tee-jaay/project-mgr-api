import mongoose from "mongoose";

const MeetingSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    projectId: { type: String, required: true },
    taskId: { type: String, },
    createdBy: { type: String, required: true },
    title: { type: String, required: true },
    bookmark: { type: String },
    status: { type: String },
    date: { type: String },
    time: { type: String },
    duration: { type: String },
    agenda: { type: String },
  },
  { timestamps: true }
);

const Meeting = mongoose.model("Meeting", MeetingSchema);

export default Meeting;
