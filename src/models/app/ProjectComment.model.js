import mongoose from "mongoose";

const ProjectCommentsSchema = new mongoose.Schema({
  commentBy: { type: String },
  comment: { type: String },
});

const ProjectComments = mongoose.model(
  "ProjectComments",
  ProjectCommentsSchema
);

export default ProjectComments;
