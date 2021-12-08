import mongoose from "mongoose";

export const ProjectAssigneeSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    userAvatar: { type: String },
  },
  { timestamps: true }
);

const ProjectAssignee = mongoose.model(
  "ProjectAssignee",
  ProjectAssigneeSchema
);

export default ProjectAssignee;
