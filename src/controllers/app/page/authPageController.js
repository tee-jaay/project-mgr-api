import multer from "multer";
import cloudinary from "cloudinary";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    // console.log(file);
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage: storage });

export const store = async (req, res) => {
  var uploadBasePath = `${process.env.APP_NAME}/settings/authpage`;
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  cloudinary.v2.uploader.upload(
    req.file.path,
    {
      resource_type: "image",
      folder: uploadBasePath,
      chunk_size: 6000000,
    },
    function (error, result) {
      console.log(result.secure_url, error);
    }
  );

  // const { image } = req.body;

  // const newHomepage = new HomePage({
  //   id: uuidv4(),
  //   logo: image,
  // });
  // try {
  //   const savedHomepage = await newHomepage.save();
  //   res.status(201).json(savedHomepage);
  // } catch (error) {
  //   res.status(500).json(error);
  // }
  res.status(201).json(req.body);
};
export const show = async (req, res) => {
  res.status(200).json("home show");
};
export const update = async (req, res) => {
  console.log(req.body);
  // const { image } = req.body;
  // const homePage = await HomePage.find();
  // try {
  //   res.status(202).json(homePage);
  // } catch (error) {
  //   res.status(500).json(error);
  // }
};
