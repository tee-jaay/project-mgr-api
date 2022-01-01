import mongoose from "mongoose";

const FeatureSchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
  content: { type: String },
});

const LibrarySchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
});

const ServerSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
});

const SystemSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
});

const ToolSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
});

const HomePageSchema = mongoose.Schema({
  id: { type: String, unique: true, required: true },
  logo: { type: String },
  about: { type: String },
  features: [FeatureSchema],
  libraries: [LibrarySchema],
  servers: [ServerSchema],
  systems: [SystemSchema],
  tools: [ToolSchema],
});

const HomePage = mongoose.model("HomePage", HomePageSchema);

export default HomePage;
