import express from "express";
import {
  index,
  store,
  show,
  update,
  destroy,
} from "../../controllers/app/project/projectController.js";
import { verifyToken } from "../../middlewares/verifyToken.js";

const router = express.Router();

// Index
router.get("/", index);
// Store
router.post("/", verifyToken, store);
// Show
router.get("/:id", show);
// Update
router.patch("/:id", update);
// destroy
router.delete("/:id", destroy);

export default router;
