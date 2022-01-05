// import Server from "../../../models/app/Server.model.js";
import colors from "colors";
// import { uploadFileToCloudinary } from "../../../services/fileUpload.js";

export const serverAdd = async (req, res) => {
  console.log(colors.blue(req.body));
  try {
    res.status(201).json(req.body);
  } catch (error) {
    res.status(500).json(error);
  }
};
