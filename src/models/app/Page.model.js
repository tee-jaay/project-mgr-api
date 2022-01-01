import mongoose from "mongoose";

const PageSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String },
    subTitle: { type: String },
    content: { type: String },
    pageType: {
      type: String,
      enum: ["privacy", "terms", "disclaimer", "gdpr"],
    },
    updateAt: { type: String },
  },
  { timestamps: true }
);

const Page = mongoose.model("Page", PageSchema);

export default Page;
