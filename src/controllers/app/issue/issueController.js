import { v4 as uuidv4 } from "uuid";
import Issue from "../../../models/app/Issue.js";

export const index = async (req, res) => {
  const issues = await Issue.find();
  res.status(200).json(issues);
};

export const store = async (req, res) => {
  const {
    taskId,
    projectId,
    createdBy,
    title,
    description,
    bookmark,
    status,
    start,
    end,
    priority,
    type,
    severity,
  } = req.body;
  const newIssue = new Issue({
    id: uuidv4(),
    taskId,
    projectId,
    createdBy,
    title,
    description,
    bookmark,
    status,
    start,
    end,
    priority,
    type,
    severity,
  });
  try {
    const savedIssue = await newIssue.save();
    res.status(201).json(savedIssue);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const show = async (req, res) => {
  try {
    const getIssue = await Issue.find({ slug: req.params.slug });
    res.status(200).json(getIssue);
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

export const issuesByProjectId = async (req, res) => {
  try {
    const issues = await Issue.find({ projectId: req.params.projectId });
    res.status(200).json(issues);
  } catch (err) {
    res.status(500).json(err);
  }
};
