import mongoose from "mongoose";

const ServerSchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
});

const Server = mongoose.model("Server", ServerSchema);

export default Server;
