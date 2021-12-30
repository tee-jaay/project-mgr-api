import { v4 as uuidv4 } from "uuid";
import HomePage from "../../../models/app/HomePage.js";

export const store = async (req, res) => {
  console.log(req.body);
  const { image } = req.body;

  const newHomepage = new HomePage({
    id: uuidv4(),
    logo: image,
  });
  try {
    const savedHomepage = await newHomepage.save();
    res.status(201).json(savedHomepage);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const show = async (req, res) => {
  res.status(200).json("home show");
};
export const update = async (req, res) => {
  console.log(req.body);
  const { image } = req.body;
  const homePage = await HomePage.find();
  try {
    res.status(202).json(homePage);
  } catch (error) {
    res.status(500).json(error);
  }
};
