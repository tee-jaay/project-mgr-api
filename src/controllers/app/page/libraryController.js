import Library from "../../../models/app/Library.model.js";
import colors from "colors";

export const libraryIndex = async (req, res) => {
  try {
    const libraries = await Library.find();
    res.status(201).json(libraries);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const libraryAdd = async (req, res) => {
  const newLib = new Library({
    name: req.body.name,
  });
  try {
    const savedLib = await newLib.save();

    const libs = await Library.find();

    res.status(201).json(libs);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const libraryDestroy = async (req, res) => {
  const { id } = req.params;
  try {
    await Library.findByIdAndDelete(id);
    res.status(200).json(id);
  } catch (error) {
    res.status(500).json(error);
  }
};
