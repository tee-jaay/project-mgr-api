import express from "express";
import {
  index,
  store,
  update,
  destroy,
} from "../../../../controllers/user/social/wallPost.controller.js";

const router = express.Router();

// Index
router.get("/:userId", index);
// Store
router.post("/:userId", store);
// Update
router.patch("/:wallPostId", update);
// Destroy
router.delete("/:wallPostId", destroy);

export default router;
