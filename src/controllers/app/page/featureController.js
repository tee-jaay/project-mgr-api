import Feature from "../../../models/app/Feature.model.js";
import { cleanFile } from "../../../services/fileCleanUp.js";
import { uploadFileToCloudinary } from "../../../services/fileUpload.js";

export const featureIndex = async (req, res) => {
  try {
    const features = await Feature.find();
    res.status(200).json(features);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const featureAdd = async (req, res) => {
  const { title, content } = req.body;

  const result = await uploadFileToCloudinary(
    req.file.path,
    "settings/feature"
  );
  const newFeature = new Feature({
    title,
    content,
    image: result.secure_url,
  });

  try {
    const savedFeature = await newFeature.save();
    cleanFile(req.file.path);    
    res.status(201).json(savedFeature);
  } catch (error) {
    res.status(500).json(error);
  }
};
