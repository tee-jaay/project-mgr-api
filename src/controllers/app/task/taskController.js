import { nanoid } from "nanoid";
import Task from "../../../models/app/Task.js";

export const index = async (req, res) => {
  console.log(req.params);
  const tasks = await Task.find().select(["-_id", "-__v"]);
  res.status(200).json(tasks);
};

export const store = async (req, res) => {
  const {
    projectId,
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
    id: nanoid(),
    projectId,
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
    res.status(500).json(err);
  }
};

export const show = async (req, res) => {
  try {
    const getTask = await Task.find({ id: req.params.taskId }).select(["-_id", "-__v"]);
    res.status(200).json(getTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const update = async (req, res) => {
  const taskId = req.params.taskId;
  const findTask = Task.find({ id: taskId });
  const {
    title,
    description,
    bookmark,
    status,
    plannedStart,
    plannedEnd,
    actualStart,
    actualEnd,
    priority,
  } = req.body;
  try {
    const result = await findTask.updateOne(findTask, {
      title,
      description,
      bookmark,
      status,
      plannedStart,
      plannedEnd,
      actualStart,
      actualEnd,
      priority,
    });
    const updatedTask = await Task.findOne({ id: req.params.taskId }).select(["-_id", "-__v"]);

    res.status(200).json({ updatedTask });
  } catch (err) {
    res.status(500).json({ update: taskId, message: "Task update failed" });
  }
};

export const destroy = (_req, res) => {
  res.send(`destroy`);
};

export const tasksByProjectId = async (req, res) => {
  console.log(req.params);
  try {
    const tasks = await Task.find({ projectId: req.params.projectId }).select(["-_id", "-__v"]);
    console.log(tasks);
    tasks.sort((a, b) => b.createdAt - a.createdAt);
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
};
