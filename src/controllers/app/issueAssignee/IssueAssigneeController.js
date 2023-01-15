import IssueAssignee from "../../../models/app/IssueAssignee.js";
import generateUUID from "../../../services/generateUUID.js";

export const index = async (req, res) => {
  const issueAssignees = await IssueAssignee.find();
  res.status(200).json(issueAssignees);
};

export const store = async (req, res) => {
  const { issueId, assigneeId } = req.body;
  const newissueAssignee = new IssueAssignee({
    id: generateUUID(),
    issueId,
    assigneeId,
  });
  try {
    const savedIssueAssignee = await newissueAssignee.save();
    res.status(201).json(savedIssueAssignee);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const show = async (req, res) => {
  try {
    const IssueAssignee = await IssueAssignee.find({ slug: req.params.slug }).select(["-_id", "-__v"]);
    res.status(200).json(IssueAssignee);
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
