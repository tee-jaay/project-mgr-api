import { v4 as uuidv4 } from "uuid";
import Task from "../../../models/app/Task.js";

export const index = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
};

export const store = async (req, res) => {
  const {
    projectSlug,
    createdBy,
    title,
    description,
    bookmark,
    status,
    plannedStart,
    plannedEnd,
    actualStart,
    actualEnd,
    priority,
    color,
  } = req.body;
  const newTask = new Task({
    id: uuidv4(),
    projectSlug,
    createdBy,
    title,
    description,
    bookmark,
    status,
    plannedStart,
    plannedEnd,
    actualStart,
    actualEnd,
    priority,
    color,
  });
  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const show = async (req, res) => {
  try {
    const getTask = await Task.find({ id: req.params.taskId });
    res.status(200).json(getTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const update = (req, res) => {
  res.send("update");
};

export const destroy = (req, res) => {
  res.send(`destroy`);
};

export const tasksByProjectId = async (req, res) => {
  try {
    const tasks = await Task.find({ projectId: req.params.projectId });
    tasks.sort((a, b) => b.createdAt - a.createdAt);
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
};
