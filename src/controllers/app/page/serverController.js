import Server from "../../../models/app/Server.model.js";

export const serverIndex = async (req, res) => {
  try {
    const servers = await Server.find();
    res.status(200).json(servers);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const serverAdd = async (req, res) => {
  const newServer = new Server({
    name: req.body.name,
  });
  try {
    const savedServer = await newServer.save();
    res.status(201).json(savedServer);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const serverDestroy = async (req, res) => {
  const { id } = req.params;
  try {
    await Server.findByIdAndDelete(id);
    res.status(200).json(id);
  } catch (error) {
    res.status(500).json(error);
  }
};
