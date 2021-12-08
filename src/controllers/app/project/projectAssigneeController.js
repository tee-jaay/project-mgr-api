import { v4 as uuidv4 } from "uuid";
import Project from "../../../models/app/Project.js";

export const index = async (req, res) => {
  res.send("comments");
};

export const store = async (req, res) => {
  console.log(req.body);
  const { projectId } = req.params;
  const { userId, userName, userAvatar } = req.body;
  try {
    const project = await Project.findOne({ id: projectId });
    await project.assignees.push({
      userId,
      userName,
      userAvatar,
    });
    const result = await project.save();
    res.status(200).json(result);
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
