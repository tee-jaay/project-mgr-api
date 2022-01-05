// import Feature from "../../../models/app/Feature.model.js";
import colors from "colors";
// import { uploadFileToCloudinary } from "../../../services/fileUpload.js";

export const featureAdd = async (req, res) => {
  console.log(colors.blue(req.body));
  try {
    res.status(201).json(req.body);
  } catch (error) {
    res.status(500).json(error);
  }
};
