import mongoose from "mongoose";

const IssueAssigneeSchema = mongoose.Schema(
  {
    id: { type: "string", required: true, unique: true },
    issueId: { type: String, required: true },
    assigneeId: { type: String, required: true },
  },
  { timestamps: true }
);

const IssueAssignee = mongoose.model("IssueAssignee", IssueAssigneeSchema);

export default IssueAssignee;
