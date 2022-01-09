import AuthPage from "../../../models/app/AuthPage.model.js";
import { uploadFileToCloudinary } from "../../../services/fileUpload.js";

import colors from "colors";
import { cleanFile } from "../../../services/fileCleanUp.js";

export const store = async (req, res) => {
  const { imgFor } = req.body;

  try {
    const result = await uploadFileToCloudinary(req.file.path, "settings/auth");

    const authPageCount = await AuthPage.countDocuments();

    if (authPageCount === 0) {
      const newAuthPage = new AuthPage({
        backgroundImage: {
          imgFor: imgFor,
          imgUrl: result.secure_url,
        },
      });
      const savedAuthPage = await newAuthPage.save();
      cleanFile(req.file.path);
      res.status(201).json(savedAuthPage);
    } else {
      const authPage = await AuthPage.find().sort({ $natural: -1 }).limit(1);

      await authPage.updateOne({
        $push: {
          backgroundImage: {
            imgFor: imgFor,
            imgUrl: result.secure_url,
          },
        },
      });
      const savedAuthPage = await authPage.save();
      console.log(colors.blue(savedAuthPage));
      cleanFile(req.file.path);
      res.status(203).json(savedAuthPage);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const show = async (req, res) => {
  try {
    const authPage = await AuthPage.find().sort({ $natural: -1 }).limit(1);

    res.status(200).json(authPage);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const update = async (req, res) => {
  console.log(req.body);
};
