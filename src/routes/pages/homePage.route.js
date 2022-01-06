import express from "express";
import { upload } from "../../services/fileUpload.js";
import {
  store,
  show,
  update,
} from "../../controllers/app/page/homePageController.js";
import {
  featureAdd,
  featureIndex,
} from "../../controllers/app/page/featureController.js";
import {
  libraryAdd,
  libraryDestroy,
  libraryIndex,
} from "../../controllers/app/page/libraryController.js";
import { serverAdd } from "../../controllers/app/page/serverController.js";
import { systemAdd } from "../../controllers/app/page/systemController.js";
import {
  toolAdd,
  toolIndex,
} from "../../controllers/app/page/toolController.js";

const router = express.Router();

// Create
router.post("/", store);
// Show
router.get("/", show);
// Update
router.patch("/update", upload.single("image"), update);
// Feature index
router.get("/feature/index", featureIndex);
router.patch("/feature/add", upload.single("image"), featureAdd);
// Tool
router.get("/tool/index", toolIndex);
router.patch("/tool/add", upload.single("image"), toolAdd);
// Server
router.patch("/server/add", serverAdd);
// System
router.patch("/system/add", systemAdd);
// Library
router.get("/library/index", libraryIndex);
router.patch("/library/add", libraryAdd);
router.delete("/library/delete", libraryDestroy);

export default router;
