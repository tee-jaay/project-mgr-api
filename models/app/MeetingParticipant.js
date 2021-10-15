import mongoose from "mongoose";

const MeetingParticipantSchema = mongoose.Schema({
  meetingId: { type: String, required: true },
  participantId: { type: String, required: true },
});

const MeetingParticipant = mongoose.model(
  "MeetingParticipant",
  MeetingParticipantSchema
);

export default MeetingParticipant;
