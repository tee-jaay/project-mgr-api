import mongoose from "mongoose";

const HomePageSchema = mongoose.Schema({
  id: { type: String, unique: true, required: true },
  logo: { type: String },
  about: { type: String },
});

const HomePage = mongoose.model("HomePage", HomePageSchema);

export default HomePage;
