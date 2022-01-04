import express from "express";
import {
  store,
  show,
  update,
  featureAdd,
  techAdd,
  serverAdd,
  systemAdd,
} from "../../controllers/app/page/homePageController.js";
import { upload } from "../../services/fileUpload.js";

const router = express.Router();

// Create
router.post("/", store);
// Show
router.get("/", show);
// Update
router.patch("/update", upload.single("image"), update);
// Feature
router.patch("/feature/add", featureAdd);
// Tech
router.patch("/tech/add", techAdd);
// Server
router.patch("/server/add", serverAdd);
// System
router.patch("/system/add", systemAdd);

export default router;
