import mongoose from "mongoose";

export const ProjectAssigneeSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    userEmail: { type: String },
    userAvatar: { type: String },
  },
  { timestamps: true }
);

const ProjectAssignee = mongoose.model(
  "ProjectAssignee",
  ProjectAssigneeSchema
);

export default ProjectAssignee;
