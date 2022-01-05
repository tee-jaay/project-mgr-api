import mongoose from "mongoose";

const FeatureSchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
  content: { type: String },
});

const Feature = mongoose.model("Feature", FeatureSchema);

export default Feature;
