import express from "express";
import CryptoJS from "crypto-js";
import {
  index,
  show,
  update,
  destroy,
} from "../../controllers/user/userController.js";
import { verifyTokenAndAuthorization } from "../auth/verifyToken.js";
import User from "../../models/auth/User.js";

const router = express.Router();

// Index
router.get("/", index);
// Show
router.get("/:id", show);
// Update
// router.patch("/:id", update);
// User
router.put(
  "/:id",
  verifyTokenAndAuthorization,
  update
  // async (req, res) => {
  // if (req.body.password) {
  //   req.body.password = CryptoJS.AES.encrypt(
  //     req.body.password,
  //     process.env.JWT_SEC
  //   ).toString();
  // }
  // try {
  //   const updatedUser = await User.findByIdAndUpdate(
  //     req.params.id,
  //     {
  //       $set: req.body,
  //     },
  //     { new: true }
  //   );
  //   res.status(200).json(updatedUser);
  // } catch (error) {
  //   res.status(500).json(error);
  // }
  // }
);
// Destroy
router.delete("/:id", destroy);

export default router;
