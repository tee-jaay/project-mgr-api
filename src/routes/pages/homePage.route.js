import express from "express";
import {
  store,
  show,
  update,
} from "../../controllers/app/page/homePageController.js";
import { upload } from "../../services/fileUpload.js";

const router = express.Router();

// Create
router.post("/", store);
// Show
router.get("/", show);
// Update
router.patch("/update", upload.single("image"), update);

export default router;
