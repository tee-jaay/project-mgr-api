import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import User from "../../models/auth/User.js";
import faker from "faker";

export const register = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.JWT_SEC
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong credentials!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.JWT_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    OriginalPassword !== req.body.password &&
      res.status(401).json("Wrong credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { email, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const logout = (req, res) => {
  res.send("logout");
};

// Faker entries
export const fakerRegisters = (req, res) => {
  var randomUsername = faker.internet.userName();
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomPassword = faker.internet.password();
  for (var i = 0; i < 25; i++) {
    var fakeeUser = new User({
      username: randomUsername,
      name: randomName,
      email: randomEmail,
      password: CryptoJS.AES.encrypt(
        randomPassword,
        process.env.JWT_SEC
      ).toString(),
    });
    fakeeUser.save((err, data) => {
      if (err) {
        console.log(err);
      }
    });
  }
  res.send("faker registers");
};
