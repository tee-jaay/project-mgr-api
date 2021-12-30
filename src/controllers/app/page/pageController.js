import { v4 as uuidv4 } from "uuid";
import Page from "../../../models/app/Page.model.js";

export const index = async (req, res) => {
  try {
    const pages = await Page.find();
    console.log(pages);
    res.status(200).json(pages);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const store = async (req, res) => {
  const { title, subTitle, content, pageType } = req.body;
  const newPage = new Page({
    id: uuidv4(),
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
