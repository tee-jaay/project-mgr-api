import mongoose from "mongoose";
import { ProjectAssigneeSchema } from "./ProjectAssignee.js";
import { ProjectBudgetSchema } from "./ProjectBudget.js";

const CommentSchema = new mongoose.Schema({
  commentBy: { type: String },
  comment: { type: String },
});

const ProjectSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    createdBy: { type: String, required: true },
    status: {
      type: String,
      enum: ["active", "cancelled", "completed", "review"],
      default: "active",
    },
    description: { type: String, default: "Please add project description" },
    repoLink: { type: String, required: false },
    urlOne: { type: String, required: false },
    urlTwo: { type: String, required: false },
    image: {
      type: String,
      default: "https://loremflickr.com/640/480/laptop",
    },
    comments: [CommentSchema],
    assignees: [ProjectAssigneeSchema],
    budget: [ProjectBudgetSchema],
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
