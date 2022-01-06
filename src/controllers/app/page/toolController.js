import colors from "colors";
import Tool from "../../../models/app/Tool.model.js";
import { cleanFile } from "../../../services/fileCleanUp.js";
import { uploadFileToCloudinary } from "../../../services/fileUpload.js";

export const toolIndex = async (req, res) => {
  try {
    const tools = await Tool.find();
    res.status(200).json(tools);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const toolAdd = async (req, res) => {
  const { name } = req.body;

  const result = await uploadFileToCloudinary(req.file.path, "settings/tool");

  try {
    const newTool = new Tool({
      name,
      image: result.secure_url,
    });
    const savedTool = await newTool.save();
    cleanFile(req.file.path);
    res.status(201).json(savedTool);
  } catch (error) {
    res.status(500).json(error);
  }
};
