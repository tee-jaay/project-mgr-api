import Todo from "../../../models/app/Todo.js";
import generateUUID from "../../../services/generateUUID.js";

export const index = async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
};

export const store = async (req, res) => {
  const { taskId, createdBy, todo, done, endDate } = req.body;

  const newTodo = new Todo({
    id: generateUUID(),
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
    const getTodo = await Todo.find({ id: req.params.todoId });
    res.status(200).json(getTodo);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const update = async (req, res) => {
  const findTodo = Todo.find({ id: req.params.todoId });
  const { todo, done, doneBy } = req.body;
  try {
    await findTodo.updateOne(findTodo, {
      todo,
      done,
      doneBy,
    });
    const updatedTodo = await Todo.find({ id: req.params.todoId });
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const destroy = async (req, res) => {
  let id = req.params.todoId;
  try {
    let result = await Todo.findOneAndDelete({ id: id });
    if (result) {
      res.status(200).json([{ id: id }, { message: "Todo deleted" }]);
    } else {
      res.status(200).json("Todo delete failed");
    }
  } catch (err) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const todosByTask = async (req, res) => {
  try {
    const todos = await Todo.find({ taskId: req.params.taskId });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json(err);
  }
};
