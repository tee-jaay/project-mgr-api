import { v4 as uuidv4 } from "uuid";
import Issue from "../../../models/app/Issue.js";
import faker from "faker";

export const index = async (req, res) => {
  const issues = await Issue.find();
  res.status(200).json(issues);
};

export const store = async (req, res) => {
  const {
    taskId,
    createdBy,
    title,
    description,
    bookmark,
    status,
    plannedStart,
    plannedEnd,
    priority,
    type,
    severity,
  } = req.body;
  const newIssue = new Issue({
    id: uuidv4(),
    taskId,
    createdBy,
    title,
    description,
    bookmark,
    status,
    plannedStart,
    plannedEnd,
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

// Faker entries
export const fakerIssues = (req, res) => {
  var title = faker.lorem.sentence();
  var createdBy = faker.random.alphaNumeric();
  var status = faker.datatype.number(8);
  var description = faker.lorem.paragraph();
  var repoLink = faker.internet.url();
  var urlOne = faker.internet.url();
  var urlTwo = faker.internet.url();
  var color = faker.internet.color();
  var image = faker.image.imageUrl();
  for (var i = 0; i < 3; i++) {
    var fakeIssue = new Issue({
      title,
      slug: uuidv4(),
      createdBy,
      status,
      description,
      repoLink,
      urlOne,
      urlTwo,
      color,
      image,
    });
    fakeIssue.save((err, data) => {
      if (err) {
        console.log(err);
      }
    });
  }

  res.send("faker Issues");
};
