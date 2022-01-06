import Library from "../../../models/app/Library.model.js";

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
    res.status(201).json(savedLib);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const libraryDestroy = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    const result = await Library.findByIdAndDelete(id);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
