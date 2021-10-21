import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    createdBy: { type: String, required: true },
    status: { type: String },
    description: { type: String, default: "Please add project description" },
    repoLink: { type: String, required: false },
    urlOne: { type: String, required: false },
    urlTwo: { type: String, required: false },
    color: { type: String, required: false },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
