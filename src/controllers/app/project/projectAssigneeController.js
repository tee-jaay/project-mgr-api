import { v4 as uuidv4 } from "uuid";
import Project from "../../../models/app/Project.js";

export const index = async (req, res) => {
  res.send("comments");
};

export const store = async (req, res) => {
  const { projectId } = req.params;
  const { data } = req.body;
  try {
    const project = await Project.findOne({ id: projectId });
    await data.forEach((element) => {
      project.assignees.push({
        userId: element.userId,
        userName: element.userName,
        userAvatar: element.userAvatar,
      });
    });
    await project.save();
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const update = async (req, res) => {
  console.log("update", req.body);
};

export const destroy = async (req, res) => {
  console.log("destroy", req.body);
};
