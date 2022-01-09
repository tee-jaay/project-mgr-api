import { v4 as uuidv4 } from "uuid";
import HomePage from "../../../models/app/HomePage.model.js";
import { cleanFile } from "../../../services/fileCleanUp.js";
import { uploadFileToCloudinary } from "../../../services/fileUpload.js";

export const store = async (req, res) => {};

export const show = async (req, res) => {
  try {
    const homePage = await HomePage.findOne();

    res.status(200).json(homePage);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const update = async (req, res) => {
  const { about } = req.body;
  const homePageCount = await HomePage.countDocuments();
  try {
    if (homePageCount === 0) {
      const result = await uploadFileToCloudinary(
        req.file.path,
        "settings/homepage"
      );
      const homePageObj = new HomePage({
        id: uuidv4(),
        logo: result.secure_url,
        about: about,
        features: [...features, feature],
      });
      const savedObj = await homePageObj.save();
      cleanFile(req.file.path);
      res.status(201).json(savedObj);
    } else {
      if (req.file) {
        const result = await uploadFileToCloudinary(
          req.file.path,
          "settings/homepage"
        );

        const updated = await HomePage.findOneAndUpdate({
          logo: result.secure_url,
          about: about,
        });
        updated.save();
      } else {
        const updated = await HomePage.findOneAndUpdate({
          about: about,
          features: [...features, feature],
        });
        updated.save();
      }

      const homePageObj = await HomePage.find().sort({ $natural: -1 }).limit(1);
      cleanFile(req.file.path);
      res.status(202).json(homePageObj);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
