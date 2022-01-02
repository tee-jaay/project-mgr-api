import { v4 as uuidv4 } from "uuid";
import HomePage from "../../../models/app/HomePage.model.js";
import colors from "colors";
import { uploadFileToCloudinary } from "../../../services/fileUpload.js";

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
  try {
    const result = await uploadFileToCloudinary(
      req.file.path,
      "settings/homepage"
    );
    console.log(colors.blue("result # ", result.secure_url));

    // const homePage = await HomePage.find();

    // console.log(colors("homePage", homePage));

    res.status(202).json(result.secure_url);
  } catch (error) {
    res.status(500).json(error);
  }
};
