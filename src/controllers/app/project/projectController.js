import { v4 as uuidv4 } from "uuid";
import slugify from "slugify";
import Project from "../../../models/app/Project.js";

export const index = async (req, res) => {
  const projects = await Project.find();
  res.status(200).json(projects);
};

export const store = async (req, res) => {
  const slugifyOptions = {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: /[*+~.()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    locale: "vi", // language code of the locale to use
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
  const { slug } = req.params;
  try {
    const getProject = await Project.find({ slug: slug });
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
