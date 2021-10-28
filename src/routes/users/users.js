import express from "express";

import {
  index,
  show,
  update,
  destroy,
} from "../../controllers/user/userController.js";
import { verifyTokenAndAuthorization } from "../../middlewares/verifyToken.js";

const router = express.Router();

// Index
router.get("/", index);
// Show
router.get("/:id", show);
// Update
router.patch("/:id", verifyTokenAndAuthorization, update);
// Destroy
router.delete("/:id", destroy);

export default router;
