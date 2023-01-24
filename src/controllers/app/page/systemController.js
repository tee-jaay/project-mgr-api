import colors from "colors";

export const systemAdd = async (req, res) => {
  console.log(colors.blue(req.body));
  try {
    res.status(201).json(req.body);
  } catch (error) {
    res.status(500).json(error);
  }
};
