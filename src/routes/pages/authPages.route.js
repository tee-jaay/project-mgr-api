import express from "express";
import {
  index,
  store,
  show,
  update,
} from "../../controllers/app/page/authPageController.js";
import { upload } from "../../services/fileUpload.js";

const router = express.Router();

// Index
router.get("/", index);
// Create
router.post("/", upload.single("image"), store);
// Show
router.get("/:id", show);
// Update
router.patch("/:id", update);

export default router;
