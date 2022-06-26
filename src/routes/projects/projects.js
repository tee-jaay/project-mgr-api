import express from "express";
import {
  index,
  store,
  show,
  update,
  destroy,
} from "../../controllers/app/project/projectController.js";
import { verifyTokenAndAdmin } from "../../middlewares/verifyToken.js";

const router = express.Router();

// Index
router.get("/", index);
// Store
router.post("/", verifyTokenAndAdmin, store);
// Show
router.get("/:id", show);
// Update
router.patch("/:id", verifyTokenAndAdmin, update);
// destroy
router.delete("/:id", verifyTokenAndAdmin, destroy);

export default router;
