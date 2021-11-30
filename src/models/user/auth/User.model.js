import mongoose from "mongoose";
import ProfileSchema from "../profile/Profile.model.js";
import RoleSchema from "./Role.model.js";

const UserSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    name: { type: String },
    email: { type: String, required: true, unique: true },
    emailVerifiedAt: { type: String },
    password: { type: String, required: true },
    role: RoleSchema,
    profile: ProfileSchema,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
