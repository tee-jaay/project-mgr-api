import { v4 as uuidv4 } from "uuid";
import TaskChat from "../../../models/app/TaskChat.model.js";

export const index = async (req, res) => {
  console.log("hit here");
  const { taskId } = req.params.taskId;
  console.log(taskId);
  res.status(200).json("all messages by task");
};

export const store = async (req, res) => {
  const { taskId } = req.params;
  const { createdBy, message, filePath } = req.body;

  const newTaskChat = new TaskChat({
    id: uuidv4(),
    taskId,
    createdBy,
    message,
    filePath,
  });

  try {
    const savedChatMsg = await newTaskChat.save();
    res.status(201).json(savedChatMsg);
  } catch (err) {
    res.status(500).json("Message save failed");
  }
};

export const destroy = async (req, res) => {
  const { messageId } = req.params.messageId;
  res.status(200).json("destroy", messageId);
};

export const ban = async (req, res) => {
  const { messageId } = req.params.messageId;
  res.status(200).json("ban", messageId);
};
