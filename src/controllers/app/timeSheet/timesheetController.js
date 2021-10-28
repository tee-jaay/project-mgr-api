import { v4 as uuidv4 } from "uuid";
import TimeSheet from "../../../models/app/TimeSheet.js";
import faker from "faker";
import mongoose from "mongoose";

export const index = async (req, res) => {
  const timesheets = await TimeSheet.find();
  res.status(200).json(timesheets);
};

export const store = async (req, res) => {
  const { taskId, createdBy, title, day, hour, min, note } = req.body;
  const newTimeSheet = new TimeSheet({
    id: uuidv4(),
    taskId,
    createdBy,
    title,
    day,
    hour,
    min,
    note,
  });
  try {
    const savedTimesheet = await newTimeSheet.save();
    res.status(201).json(savedTimesheet);
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

// Faker entries
export const fakerTimesheets = (req, res) => {
  //   var title = faker.lorem.sentence();
  //   var createdBy = faker.random.alphaNumeric();
  //   var status = faker.datatype.number(8);
  //   var description = faker.lorem.paragraph();
  //   var repoLink = faker.internet.url();
  //   var urlOne = faker.internet.url();
  //   var urlTwo = faker.internet.url();
  //   var color = faker.internet.color();
  //   var image = faker.image.imageUrl();
  //   for (var i = 0; i < 3; i++) {
  //     var fakeMeeting = new Issue({
  //       title,
  //       slug: uuidv4(),
  //       createdBy,
  //       status,
  //       description,
  //       repoLink,
  //       urlOne,
  //       urlTwo,
  //       color,
  //       image,
  //     });
  //     fakeMeeting.save((err, data) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //     });
  //   }

  res.send("faker timesheets");
};
