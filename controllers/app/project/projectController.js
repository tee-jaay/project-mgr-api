import { v4 as uuidv4 } from "uuid";
import Project from "../../../models/app/Project.js";
import faker from "faker";
import User from "../../../models/auth/User.js";
import mongoose from "mongoose";

export const index = async (req, res) => {
  const projects = await Project.find();
  res.status(200).json(projects);
};

export const store = async (req, res) => {
  const {
    title,
    createdBy,
    status,
    description,
    repoLink,
    urlOne,
    urlTwo,
    color,
    image,
  } = req.body;
  const newProject = new Project({
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
  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const show = async (req, res) => {
  try {
    const getProject = await Project.find({ slug: req.params.slug });
    res.status(200).json(getProject);
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
export const fakerProjects = (req, res) => {
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
    var fakeProject = new Project({
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
    fakeProject.save((err, data) => {
      if (err) {
        console.log(err);
      }
    });
  }

  res.send("faker projects");
};
