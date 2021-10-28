import mongoose from "mongoose";

const ProjectBudgetSchema = mongoose.Schema(
  {
    id: { type: "string", required: true, unique: true },
    estimate: { type: String, required: true },
    spent: { type: String, default: "0" },
    projectId: { type: String, required: true },
  },
  { timestamps: true }
);

const ProjectBudget = mongoose.model("ProjectBudget", ProjectBudgetSchema);

export default ProjectBudget;
