import AuthPage from "../../../models/app/AuthPage.model.js";
import { uploadFileToCloudinary } from "../../../services/fileUpload.js";
import { cleanFile } from "../../../services/fileCleanUp.js";
import generateUUID from "../../../services/generateUUID.js";

export const index = async (req, res) => {
  try {
    const authPages = await AuthPage.find();
    res.status(200).json(authPages);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const store = async (req, res) => {
  const { imgFor } = req.body;

  const result = await uploadFileToCloudinary(req.file.path, "settings/auth");
  const newAuthPage = new AuthPage({
    id: generateUUID(),
    imgFor: imgFor,
    imgUrl: result.secure_url,
  });
  try {
    const savedAuthPage = await newAuthPage.save();
    cleanFile(req.file.path);
    res.status(201).json(savedAuthPage);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const show = async (req, res) => {
  try {
    const authPage = await AuthPage.find().sort({ $natural: -1 }).limit(1);

    res.status(200).json(authPage);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const update = async (req, res) => {
  console.log(req.body);
};
