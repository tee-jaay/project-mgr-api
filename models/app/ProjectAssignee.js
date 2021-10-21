import mongoose from "mongoose";

const ProjectAssigneeSchema = mongoose.Schema(
  {
    projectId: { type: String, required: true },
    assigneeId: { type: String, required: true },
  },
  { timestamps: true }
);

const ProjectAssignee = mongoose.model(
  "ProjectAssignee",
  ProjectAssigneeSchema
);

export default ProjectAssignee;
