import mongoose from "mongoose";

const ProjectBudgetSchema = mongoose.Schema({
  estimate: { type: String, required: true },
  spent: { type: String, default: "0" },
  projectId: { type: String, required: true },
});

const ProjectBudget = mongoose.model("ProjectBudget", ProjectBudgetSchema);

export default ProjectBudget;
