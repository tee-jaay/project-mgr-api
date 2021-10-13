import { v4 as uuidv4 } from "uuid";
import Project from "../../../models/app/Project.js";

export const index = async (req, res) => {
  const projects = await Project.find();
  res.status(200).json(projects);
};

export const store = async (req, res) => {
  const newProject = new Project({
    title: req.body.title,
    slug: uuidv4(),
    created_by: req.body.created_by,
    status: req.body.status,
    description: req.body.description,
    repo_link: req.body.repo_link,
    url_one: req.body.url_one,
    url_two: req.body.url_two,
    color: req.body.color,
    image: req.body.image,
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
  // const { id } = req.params;

  // const { firstName, lastName, age } = req.body;

  // const user = users.find((user) => user.id === id);

  // if (firstName) {
  //   user.firstName = firstName;
  // }
  // if (lastName) {
  //   user.lastName = lastName;
  // }
  // if (age) {
  //   user.age = age;
  // }

  // res.send(`User with the id ${user.id} updated`);
  res.send("update");
};

export const destroy = (req, res) => {
  // const { id } = req.params;

  // users = users.filter((user) => user.id !== id);

  // res.send(`User with id ${id} deleted`);
  res.send(`destroy`);
};
