import mongoose from "mongoose";

const AuthPageSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true },
    imgFor: {
      type: String,
      enum: ["signIn", "signUp", "pwdResetReq", "savePasswd"],
    },
    imgUrl: { type: String },
  },
  { timestamps: true }
);

const AuthPage = mongoose.model("AuthPage", AuthPageSchema);

export default AuthPage;
