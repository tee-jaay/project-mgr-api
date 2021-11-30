import mongoose from "mongoose";

const RoleSchema = mongoose.Schema({
  type: {
    type: String,
    enum: ["user", "admin", "client", "guest", "visitor", "bot"],
    required: [true, "Invalide user role"],
    default: "user",
  },
  description: { type: String },
});

export default RoleSchema;
