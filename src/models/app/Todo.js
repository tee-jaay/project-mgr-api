import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    id: { type: "string", required: true, unique: true },
    taskId: { type: String, required: true },
    createdBy: { type: String, required: true },
    todo: { type: String, required: true },
    done: { type: Boolean, default: false },
    endDate: { type: String },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
