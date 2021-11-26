import mongoose from "mongoose";

const MeetingCommentSchema = new mongoose.Schema(
  {
    createdBy: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);
export default MeetingCommentSchema;
