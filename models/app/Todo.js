import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    taskId: { type: String, required: true },
    createdBy: { type: String, required: true },
    todo: { type: String, required: true },
    done: { type: Number, default: 0 },
    end_date: { type: String },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
