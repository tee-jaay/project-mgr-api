import mongoose from "mongoose";

const imgSchema = new mongoose.Schema({
  imgFor: {
    type: String,
    enum: ["signIn", "signUp", "pwdResetReq", "savePasswd"],
    required: true,
  },
  imgUrl: { type: String, required: true },
});

const AuthPageSchema = new mongoose.Schema(
  {
    backgroundImage: [imgSchema],
  },
  { timestamps: true }
);

const AuthPage = mongoose.model("AuthPage", AuthPageSchema);

export default AuthPage;
