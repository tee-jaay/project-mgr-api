import express from "express";
import { upload } from "../../services/fileUpload.js";
import {
  store,
  show,
  update,
} from "../../controllers/app/page/homePageController.js";
import { featureAdd } from "../../controllers/app/page/featureController.js";
import { libraryAdd } from "../../controllers/app/page/libraryController.js";
import { serverAdd } from "../../controllers/app/page/serverController.js";
import { systemAdd } from "../../controllers/app/page/systemController.js";
import { toolAdd } from "../../controllers/app/page/toolController.js";

const router = express.Router();

// Create
router.post("/", store);
// Show
router.get("/", show);
// Update
router.patch("/update", upload.single("image"), update);
// Feature
router.patch("/feature/add", upload.single("image"), featureAdd);
// Tool
router.patch("/tool/add", toolAdd);
// Server
router.patch("/server/add", serverAdd);
// System
router.patch("/system/add", systemAdd);
// Library
router.patch("/library/add", libraryAdd);

export default router;
