import multer from "multer";
import cloudinary from "cloudinary";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });

export const uploadFileToCloudinary = (localFilePath, uploadBasePath) => {
  const cloudName = process.env.CLOUDINARY_CLOUDNAME;
  const cloudApi = process.env.CLOUDINARY_API_KEY;
  const cloudSecret = process.env.CLOUDINARY_API_SECRET;
  const folderPath = `${process.env.APP_NAME}/${uploadBasePath}`;

  cloudinary.config({
    cloud_name: cloudName,
    api_key: cloudApi,
    api_secret: cloudSecret,
    secure: true,
  });

  const uploadResult = cloudinary.v2.uploader.upload(
    localFilePath,
    {
      resource_type: "image",
      folder: folderPath,
      chunk_size: 6000000,
    },
    (error, result) => {
      if (error) return error;
      return result;
    }
  );
  return uploadResult;
};
