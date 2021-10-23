import { v4 as uuidv4 } from "uuid";
import Todo from "../../../models/app/Todo.js";

export const index = async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
};

export const store = async (req, res) => {
  const { taskId, createdBy, todo, done, endDate } = req.body;
  const newTodo = new Todo({
    id: uuidv4(),
    taskId,
    createdBy,
    todo,
    done,
    endDate,
  });
  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const show = async (req, res) => {
  try {
    const getTodo = await Todo.find({ _id: req.params.id });
    res.status(200).json(getTodo);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const update = (req, res) => {
  res.send("update");
};

export const destroy = (req, res) => {
  res.send("destroy");
};

export const todosByTask = async (req, res) => {
  try {
    const todos = await Todo.find({ taskId: req.params.taskId });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json(err);
  }
};
