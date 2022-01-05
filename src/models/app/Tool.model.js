import mongoose from "mongoose";

const ToolSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
});

const Tool = mongoose.model("Tool", ToolSchema);

export default Tool;
