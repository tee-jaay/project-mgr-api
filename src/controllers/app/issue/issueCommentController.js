import Issue from "../../../models/app/Issue.model.js";

export const create = async (req, res) => {
  const { issueId } = req.params;
  const { text, commentBy } = req.body;
  try {
    const issue = await Issue.findOne({ id: issueId });
    await issue.comments.push({
      text: text,
      commentBy: commentBy,
    });
    const result = await issue.save();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const destroy = async (req, res) => {
  console.log("issue comment destroy", req.body);
};
