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
    const getTask = await Task.find({ _id: req.params.id });
    res.status(200).json(getTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const update = (req, res) => {
  // const { id } = req.params;

  // const { firstName, lastName, age } = req.body;

  // const user = users.find((user) => user.id === id);

  // if (firstName) {
  //   user.firstName = firstName;
  // }
  // if (lastName) {
  //   user.lastName = lastName;
  // }
  // if (age) {
  //   user.age = age;
  // }

  // res.send(`User with the id ${user.id} updated`);
  res.send("update");
};

export const destroy = (req, res) => {
  // const { id } = req.params;

  // users = users.filter((user) => user.id !== id);

  // res.send(`User with id ${id} deleted`);
  res.send(`destroy`);
};

export const tasksByProject = async (req, res) => {
  try {
    const tasks = await Task.find({ projectSlug: req.params.projectSlug });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
};
