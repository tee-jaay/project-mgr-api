import Comment from "../../../models/app/Comment.js";
import generateUUID from "../../../services/generateUUID.js";

export const index = async (req, res) => {
  const comment = await Comment.find();
  res.status(200).json(comment);
};

export const store = async (req, res) => {
  const { taskId, commenterId, comment, file } = req.body;
  const newComment = new Comment({
    id: generateUUID(),
    taskId,
    commenterId,
    comment,
    file,
  });
  try {
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

export const show = async (req, res) => {
  try {
    const getComment = await Comment.find({ _id: req.params.id });
    res.status(200).json(getComment);
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
