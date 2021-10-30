import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    name: { type: String },
    email: { type: String, required: true, unique: true },
    emailVerifiedAt: { type: String },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["user", "admin", "client", "guest", "visitor", "bot"],
      required: [true, "Invalide user role"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

export default User;
