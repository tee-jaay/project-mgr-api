import Project from "../../../models/app/Project.js";

export const index = async (req, res) => {};

export const store = async (req, res) => {
  const { projectId } = req.params;
  const { estimate, spent } = req.body;
  try {
    const project = await Project.findOneAndUpdate(
      { id: projectId },
      { budget: { estimate: estimate, spent: spent } }
    );
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const show = async (req, res) => {};

export const update = (req, res) => {
  res.send(`update`);
};

export const destroy = (req, res) => {
  res.send(`destroy`);
};
