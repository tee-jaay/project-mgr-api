import { v4 as uuidv4 } from "uuid";
import TimeSheet from "../../../models/app/TimeSheet.model.js";

export const index = async (req, res) => {
  const timesheets = await TimeSheet.find();
  res.status(200).json(timesheets);
};

export const store = async (req, res) => {
  const { projectId, task, taskId, createdBy, title } = req.body;
  const newTimeSheet = new TimeSheet({
    id: uuidv4(),
    projectId,
    task,
    taskId,
    createdBy,
    title,
  });
  try {
    const savedTimeSheet = await newTimeSheet.save();
    res.status(201).json(savedTimeSheet);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const show = async (req, res) => {
  try {
    const getTimeSheet = await TimeSheet.find({ slug: req.params.slug });
    res.status(200).json(getTimeSheet);
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

export const timeSheetsByProjectId = async (req, res) => {
  try {
    const timeSheets = await TimeSheet.find({
      projectId: req.params.projectId,
    });
    // console.log("timeSheets", timeSheets);
    res.status(200).json(timeSheets);
  } catch (err) {
    res.status(500).json(err);
  }
};
