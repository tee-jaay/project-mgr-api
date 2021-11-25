import mongoose from "mongoose";

const ProjectCommentsSchema = new mongoose.Schema(
  {
    // id: { type: String, required: true, unique: true },
    // projectId: { type: String, required: true },
    commentBy: { type: String },
    comment: { type: String },
  },
  { timestamps: true }
);

const ProjectComments = mongoose.model(
  "ProjectComments",
  ProjectCommentsSchema
);

export default ProjectComments;
