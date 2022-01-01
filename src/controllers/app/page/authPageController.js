import multer from "multer";
import cloudinary from "cloudinary";
import AuthPage from "../../../models/app/AuthPage.model.js";
import colors from "colors";

let imgUrl = "";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });

const uploadToCloudinary = (localFilePath, uploadBasePath) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  var uploadResult = cloudinary.v2.uploader.upload(
    localFilePath,
    {
      resource_type: "image",
      folder: uploadBasePath,
      chunk_size: 6000000,
    },
    function (error, result) {
      return result.secure_url;
    }
  );
  uploadResult
    .then((res) => {
      imgUrl = res.secure_url;
    })
    .catch((err) => console.error(err));
  return uploadResult;
};

export const store = async (req, res) => {
  const { imgFor } = req.body;
  var uploadBasePath = `${process.env.APP_NAME}/settings/authpage`;

  try {
    await uploadToCloudinary(req.file.path, uploadBasePath);

    const authPage = AuthPage.find().sort({ $natural: -1 }).limit(1);

    await authPage.updateOne({
      $push: {
        backgroundImage: {
          imgFor: imgFor,
          imgUrl: imgUrl,
        },
      },
    });
    const savedAuthPage = await authPage.save();
    res.status(203).json(savedAuthPage);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const show = async (req, res) => {
  try {
    const authPage = await AuthPage.find().sort({ $natural: -1 }).limit(1);
    console.log(colors.green(authPage));
    res.status(200).json(authPage);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const update = async (req, res) => {
  console.log(req.body);
};
