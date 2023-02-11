import TimeSheet from "../../../models/app/TimeSheet.model.js";
import generateUUID from "../../../services/generateUUID.js";

export const index = async (req, res) => {
  const timesheets = await TimeSheet.find();
  res.status(200).json(timesheets);
};

export const store = async (req, res) => {
  const {projectId} = req.params;
  const { task, taskId, createdBy, title } = req.body;
  const newTimeSheet = new TimeSheet({
    id: generateUUID(),
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

export const update = async (req, res) => {
  const { day, time, note, timesheetId } = req.body;
  try {
    const timeSheet = await TimeSheet.findOne({ id: timesheetId });
    await timeSheet.logs.push({
      day: day,
      time: time,
      note: note,
    });
    const result = await timeSheet.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const destroy = (req, res) => {
  res.send(`destroy`);
};

export const timeSheetsByProjectId = async (req, res) => {
  try {
    const timeSheets = await TimeSheet.find({
      projectId: req.params.projectId,
    });
    timeSheets.sort((a, b) => b.createdAt - a.createdAt);
    res.status(200).json(timeSheets);
  } catch (err) {
    res.status(500).json(err);
  }
};
