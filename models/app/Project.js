import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  created_by: { type: String, required: true },
  status: { type: Number, default: 0 },
  description: { type: String, default: "Please add project description" },
  repo_link: { type: String, required: false },
  url_one: { type: String, required: false },
  url_two: { type: String, required: false },
  color: { type: String, required: false },
});

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
