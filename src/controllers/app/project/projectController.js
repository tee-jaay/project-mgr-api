import { v4 as uuidv4 } from "uuid";
import slugify from "slugify";
import Project from "../../../models/app/Project.js";

export const index = async (req, res) => {
  const projects = await Project.find();
  res.status(200).json(projects);
};

export const byLimit = async (req, res) => {
  const limit = req.params.limit;
  const projects = await Project.find({})
    .sort({ "data.eTimeStamp": -1 })
    .limit(parseInt(limit));
  res.status(200).json(projects);
};

export const store = async (req, res) => {
  const slugifyOptions = {
    replacement: "-",
    remove: /[*+~.()'"!:@]/g,
    lower: true,
    strict: false,
    locale: "vi",
    trim: true,
  };
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
    id: uuidv4(),
    title,
    slug: slugify(title, slugifyOptions),
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
  const { id } = req.params;
  try {
    const getProject = await Project.find({ id: id });
    res.status(200).json(getProject);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const update = (req, res) => {
  res.send("update");
};

export const destroy = (req, res) => {
  res.send("destroy");
};
