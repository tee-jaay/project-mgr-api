import mongoose from "mongoose";

const MeetingParticipantSchema = mongoose.Schema(
  {
    id: { type: "string", required: true, unique: true },
    meetingId: { type: String, required: true },
    participantId: { type: String, required: true },
  },
  { timestamps: true }
);

const MeetingParticipant = mongoose.model(
  "MeetingParticipant",
  MeetingParticipantSchema
);

export default MeetingParticipant;
