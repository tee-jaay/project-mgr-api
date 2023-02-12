import express from "express";
import {
  index,
  store,
  show,
  update,
  destroy,
  timeSheetsByProjectId,
} from "../../controllers/app/timeSheet/timesheet.controller.js";
import { verifyTokenAndAdmin } from "../../middlewares/verifyToken.js";

const router = express.Router();

// Index
router.get("/", index);
// Store
router.post("/projectId/:projectId", verifyTokenAndAdmin, store);
// Show
router.get("/timeSheetId/:timeSheetId", show);
// Update
router.patch("/timeSheetId/:timeSheetId", update);
// Destroy
router.delete("/timeSheetId/:timeSheetId", destroy);
// Fetch
router.get("/projectId/:projectId", timeSheetsByProjectId);

export default router;
