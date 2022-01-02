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
  const { about } = req.body;
  const homePageCount = await HomePage.countDocuments();
  try {
    const result = await uploadFileToCloudinary(
      req.file.path,
      "settings/homepage"
    );

    if (homePageCount === 0) {
      const homePageObj = new HomePage({
        id: uuidv4(),
        logo: result.secure_url,
        about: about,
      });
      const savedObj = await homePageObj.save();
      res.status(201).json(savedObj);
    } else {
      const updated = await HomePage.findOneAndUpdate({
        about: about,
      });
      updated.save();
      const homePageObj = await HomePage.find().sort({ $natural: -1 }).limit(1);
      res.status(202).json(homePageObj);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
