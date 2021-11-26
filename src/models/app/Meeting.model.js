import mongoose from "mongoose";
import MeetingCommentSchema from "./MeetingComment.model.js";

const MeetingSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    projectId: { type: String, required: true },
    createdBy: { type: String, required: true },
    title: { type: String, required: true },
    bookmark: { type: String },
    status: { type: String },
    date: { type: String },
    time: { type: String },
    duration: { type: String },
    agenda: { type: String },
    location: { type: String },
    address: { type: String },
    phone: { type: String },
    comments: [MeetingCommentSchema],
  },
  { timestamps: true }
);

const Meeting = mongoose.model("Meeting", MeetingSchema);

export default Meeting;
