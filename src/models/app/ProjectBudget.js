import mongoose from "mongoose";

export const ProjectBudgetSchema = mongoose.Schema(
  {
    estimate: { type: String, required: true },
    spent: { type: String, default: "0" },
  },
  { timestamps: true }
);
