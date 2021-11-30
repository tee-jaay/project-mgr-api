import mongoose from "mongoose";

const ProfileSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    bio: { type: String },
    headerBg: { type: String },
    industry: { type: String },
    address: { type: String },
    country: { type: String },
    phone: { type: String },
    favOs: { type: String },
    website: { type: String },
    facebook: { type: String },
    twitter: { type: String },
    github: { type: String },
    gitlab: { type: String },
    instagram: { type: String },
    linkedin: { type: String },
    pinterest: { type: String },
    language: { type: String },
    fdotWeek: { type: String },
    timezone: { type: String },
    sidebar: { type: Boolean, default: false },
    avatar: { type: String },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", ProfileSchema);

export default Profile;
