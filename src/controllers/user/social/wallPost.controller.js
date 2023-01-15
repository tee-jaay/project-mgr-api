import WallPost from "../../../models/user/social/WallPost.model.js";
import generateUUID from "../../../services/generateUUID.js";

export const index = async (req, res) => {
  try {
    const wallPosts = await WallPost.find({ userId: req.params.userId });
    res.status(200).json(wallPosts);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const store = async (req, res) => {
  const { userId } = req.params;
  const { postBy, content } = req.body;
  try {
    const newPost = new WallPost({
      id: generateUUID(),
      userId: userId,
      postBy: postBy,
      content: content,
    });
    const savedWallPost = await newPost.save();
    res.status(201).json(savedWallPost);
  } catch (error) {
    console.log(error);
  }
};

export const update = async (req, res) => {
  console.log("wall post update");
  try {
    res.status(200).json("");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const destroy = (req, res) => {
  res.send("destroy");
};
