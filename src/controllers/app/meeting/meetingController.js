import { v4 as uuidv4 } from "uuid";
import Meeting from "../../../models/app/Meeting.js";
import faker from "faker";
import mongoose from "mongoose";

export const index = async (req, res) => {
  const meetings = await Meeting.find();
  res.status(200).json(meetings);
};

export const store = async (req, res) => {
  const {
    taskId,
    createdBy,
    title,
    bookmark,
    status,
    date,
    time,
    duration,
    agenda,
  } = req.body;
  const newMeeting = new Meeting({
    id: uuidv4(),
    taskId,
    createdBy,
    title,
    bookmark,
    status,
    date,
    time,
    duration,
    agenda,
  });
  try {
    const savedMeeting = await newMeeting.save();
    res.status(201).json(savedMeeting);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const show = async (req, res) => {
  try {
    const getMeeting = await Meeting.find({ slug: req.params.slug });
    res.status(200).json(getMeeting);
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

export const meetingsByProject = async (req, res) => {
  try {
    const meetings = await Meeting.find({ projectId: req.params.projectId });
    res.status(200).json(meetings);
  } catch (err) {
    res.status(500).json(err);
  }
};
