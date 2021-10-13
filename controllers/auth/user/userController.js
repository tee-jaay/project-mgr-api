import CryptoJS from "crypto-js";
import User from "../../../models/auth/User.js";

let users = [];

export const index = (req, res) => {
  res.send(users);
};

export const store = async (req, res) => {
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

export const show = (req, res) => {
  res.send("show");
};

export const update = (req, res) => {
  res.send("update");
};

export const destroy = (req, res) => {
  res.send("destroy");
};
