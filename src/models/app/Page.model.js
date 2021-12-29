import mongoose from "mongoose";

const TermsSchema = new mongoose.Schema({
  title: { type: String },
  subTitle: { type: String },
  content: { type: String },
  updateAt: { type: String },
});

const GDPRSchema = new mongoose.Schema({
  title: { type: String },
  subTitle: { type: String },
  content: { type: String },
  updateAt: { type: String },
});

const PrivacyPolicySchema = new mongoose.Schema({
  title: { type: String },
  subTitle: { type: String },
  content: { type: String },
  updateAt: { type: String },
});

const DisclaimerSchema = new mongoose.Schema({
  title: { type: String },
  subTitle: { type: String },
  content: { type: String },
  updateAt: { type: String },
});

const AuthSchema = new mongoose.Schema({
  signInBg: { type: String },
  signUpBg: { type: String },
  passwordResetBg: { type: String },
  changePassword: { type: String },
});

const PageSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    terms: [TermsSchema],
    gdpr: [GDPRSchema],
    disclaimer: [DisclaimerSchema],
    privacyPolicy: [PrivacyPolicySchema],
    auth: [AuthSchema],
  },
  { timestamps: true }
);

const Page = mongoose.model("Page", PageSchema);

export default Page;
