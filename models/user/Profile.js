import mongoose from "mongoose";

const ProfileSchema = mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  industry: { type: String },
  country: { type: String },
  phone: { type: String },
  fav_os: { type: String },
  website: { type: String },
  facebook: { type: String },
  twitter: { type: String },
  github: { type: String },
  gitlab: { type: String },
  instagram: { type: String },
  pinterest: { type: String },
  language: { type: String },
  fdot_week: { type: String },
  timezone: { type: String },
  sidebar: { type: Boolean, default: false },
  avatar: { type: String },
});

const Profile = mongoose.model("Profile", ProfileSchema);

export default Profile;
