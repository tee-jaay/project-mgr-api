import mongoose from "mongoose";

const IssueAssigneeSchema = mongoose.Schema({
  issueId: { type: String, required: true },
  assigneeId: { type: String, required: true },
});

const IssueAssignee = mongoose.model("IssueAssignee", IssueAssigneeSchema);

export default IssueAssignee;
