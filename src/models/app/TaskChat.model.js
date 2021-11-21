import mongoose from "mongoose";

const TaskChatSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    taskId: { type: String, required: true },
    createdBy: { type: String, required: true },
    message: { type: String, required: true },
    bookmark: { type: Boolean },
    role: { type: String, default: "user" },
    filePath: { type: String },
    ban: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const TaskChat = mongoose.model("TaskChat", TaskChatSchema);

export default TaskChat;
