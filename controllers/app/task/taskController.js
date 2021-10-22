import { v4 as uuidv4 } from "uuid";
import Task from "../../../models/app/Task.js";

// faker
import mongoose from "mongoose";
import faker from "faker";
// faker

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
    const getTask = await Task.find({ _id: req.params.id });
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

export const tasksByProject = async (req, res) => {
  try {
    const tasks = await Task.find({ projectSlug: req.params.projectSlug });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const fakerTasks = async (req, res) => {
  var db = mongoose.connection;
  // count projects
  var projectsCount = await db.collection("projects").count();
  // get projects
  var getData = await db.collection("projects").find().toArray();

  for (let i = 0; i < projectsCount; i++) {
    var projectSlug = getData[i].slug;
    var createdBy = getData[i].createdBy;
    var title = faker.lorem.sentence();
    var description = faker.lorem.paragraph();
    var bookmark = "1";

    var statusArr = [
      "active",
      "cancelled",
      "completed",
      "review",
      "not started",
    ];
    var status = statusArr[(Math.random() * statusArr.length) | 0];

    var plannedStart = faker.date.past();
    var plannedEnd = faker.date.future();
    var actualStart = faker.date.future();
    var actualEnd = faker.date.past();

    var priorityArr = ["critical", "low", "medium", "high"];
    var priority = priorityArr[(Math.random() * priorityArr.length) | 0];

    var color = faker.internet.color();

    var fakeTask = new Task({
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
    fakeTask.save((err, data) => {
      if (err) {
        console.log(err);
      }
    });
  } // for

  res.status(200).json("faker tasks");
};
