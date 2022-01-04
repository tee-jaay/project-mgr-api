import { v4 as uuidv4 } from "uuid";
import HomePage from "../../../models/app/HomePage.model.js";
import colors from "colors";
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
  console.log(colors.blue(req.body.feature));
  const { about } = req.body;
  const homePageCount = await HomePage.countDocuments();
  try {
    // const result = await uploadFileToCloudinary(
    //   req.file.path,
    //   "settings/homepage"
    // );

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
          // logo: "result.secure_url",
          about: about,
          features: [...features, feature],
        });
        updated.save();
      }

      const homePageObj = await HomePage.find().sort({ $natural: -1 }).limit(1);
      res.status(202).json(homePageObj);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const featureAdd = async (req, res) => {
  const { feature } = req.body;

  try {
    const homePageObj = await HomePage.find();
    console.log(colors.grey(homePageObj[0].features));
    await homePageObj[0].features.unshift({
      title: feature.title,
      image: feature.image,
      description: feature.description,
    });
    const savedObj = await homePageObj[0].save();
    res.status(201).json(savedObj);
  } catch (error) {
    console.log(colors.red(error));
    res.status(500).json(error);
  }
};

export const techAdd = async (req, res) => {
  console.log(req.body);
};

export const serverAdd = async (req, res) => {
  console.log(req.body);
};

export const systemAdd = async (req, res) => {
  console.log(req.body);
};
