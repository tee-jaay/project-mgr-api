import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    emailVerifiedAt: { type: String },
    password: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
