import express from "express";
import {
  store,
  show,
  update,
  upload,
} from "../../controllers/app/page/authPageController.js";

const router = express.Router();

// Create
router.post("/", upload.single("image"), store);
// Show
router.get("/:id", show);
// Update
router.patch("/:id", update);

export default router;
