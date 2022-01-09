import express from "express";
import {
  store,
  show,
  update,
} from "../../controllers/app/page/authPageController.js";
import { upload } from "../../services/fileUpload.js";

const router = express.Router();

// Create
router.post("/", upload.single("image"), store);
// Show
router.get("/", show);
// Update
router.patch("/:id", update);

export default router;
