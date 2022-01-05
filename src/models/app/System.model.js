import mongoose from "mongoose";

const SystemSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
});

const System = mongoose.model("System", SystemSchema);

export default System;
