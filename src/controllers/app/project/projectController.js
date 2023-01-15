import { nanoid } from "nanoid";
import slugify from "slugify";
import Project from "../../../models/app/Project.js";

export const index = async (_req, res) => {
  const projects = await Project.find({}).select(["-_id", "-__v"]);
  res.status(200).json(projects);
};

export const byLimit = async (req, res) => {
  const limit = req.params.limit;
  const projects = await Project.find(
    {},
    { _id: 0, id: 1, title: 1, status: 1, image: 1 },
    { sort: { createdAt: -1 } }
  ).limit(parseInt(limit));
  res.status(200).json(projects);
};

export const store = async (req, res, _next) => {
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
    image,
  } = req.body;
  const newProject = new Project({
    id: nanoid(),
    title,
    slug: title.length > 0 ? slugify(title, slugifyOptions) : "no-slug",
    createdBy,
    status,
    description,
    repoLink,
    urlOne,
    urlTwo,
    image,
  });
  try {
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const show = async (req, res) => {
  const { projectId } = req.params;
  try {
    const getProject = await Project.find({ id: projectId }).select(["-_id", "-__v"]);
    res.status(200).json(getProject);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const update = async (req, res) => {
  const { projectId } = req.params;

  const { title, status, description, repoLink, image } = req.body;

  try {
    await Project.findOneAndUpdate(
      { id: projectId },
      {
        title: title,
        status: status,
        description: description,
        repoLink: repoLink,
        image: image,
      }
    );
    const updatedProject = await Project.findOne({ id: id }).select(["-_id", "-__v"]);
    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const search = async (req, res) => {
  const { _keyword } = req.params;
  try {
    const result = await Project.find({
      title: new RegExp(_keyword, "i"),
    }).select(["-_id", "-__v"]);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const destroy = (_req, res) => {
  res.send("Todo: destroy");
};
