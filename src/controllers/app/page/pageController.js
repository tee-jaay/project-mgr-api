import Page from "../../../models/app/Page.model.js";
import generateUUID from "../../../services/generateUUID.js";

export const index = async (req, res) => {
  try {
    const pages = await Page.find();
    res.status(200).json(pages);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const store = async (req, res) => {
  const { title, subTitle, content, pageType } = req.body;
  const newPage = new Page({
    id: generateUUID(),
    title,
    subTitle,
    content,
    pageType,
  });
  try {
    const savedPage = await newPage.save();
    res.status(201).json(savedPage);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const show = async (req, res) => {
  console.log(req.body);
  res.status(200).json("page show");
};
export const update = async (req, res) => {
  console.log(req.body);
};
