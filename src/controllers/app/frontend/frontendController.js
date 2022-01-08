import Feature from "../../../models/app/Feature.model.js";
import Server from "../../../models/app/Server.model.js";
import HomePage from "../../../models/app/HomePage.model.js";
import Page from "../../../models/app/Page.model.js";
import Tool from "../../../models/app/Tool.model.js";

export const site = async (req, res) => {
  try {
    const homepage = await HomePage.find();
    const pages = await Page.find();
    const features = await Feature.find();
    const servers = await Server.find();
    const tools = await Tool.find();
    const result = {
      homepage: homepage,
      pages: pages,
      features: features,
      servers: servers,
      tools: tools,
    };
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
