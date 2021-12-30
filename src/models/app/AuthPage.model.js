import mongoose from "mongoose";

const AuthPageSchema = new mongoose.Schema(
  {
    signInBg: { type: String },
    signUpBg: { type: String },
    passwordResetBg: { type: String },
    changePasswordBg: { type: String },
  },
  { timestamps: true }
);

const AuthPage = mongoose.model("AuthPage", AuthPageSchema);

export default AuthPage;
