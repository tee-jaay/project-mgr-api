import { nanoid } from "nanoid";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import User from "../../models/user/auth/User.model.js";

export const register = async (req, res) => {
  if (process.env.USER_REGISTRAION !== "enabled") {
    return res.status(400).json({
      message: "User registration is disabled"
    });
  }
  const newUser = new User({
    id: nanoid(),
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    role: { type: req.body.role?.type },
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

    if (!user) {
      return res.status(401).json("Wrong credentials!");
    } else {
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.JWT_SEC
      );
      const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

      if (OriginalPassword !== req.body.password) {
        return res.status(401).json("Wrong credentials!");
      } else {
        const accessToken = jwt.sign(
          {
            id: user.id,
            role: user.role,
          },
          process.env.JWT_SEC,
          { expiresIn: "3d" }
        );

        const { email, ...others } = user._doc;

        return res.status(200).json({ ...others, accessToken });
      }
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const passwordUpdate = async (req, res) => {
  console.log("auth # password update");
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.JWT_SEC
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const logout = (_req, res) => {
  res.send("logout");
};
