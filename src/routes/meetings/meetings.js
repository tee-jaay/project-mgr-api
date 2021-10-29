import express from "express";
import {
  index,
  store,
  show,
  update,
  destroy,
  meetingsByProjectId,
} from "../../controllers/app/meeting/meetingController.js";

const router = express.Router();

// Index
router.get("/", index);
// Store
router.post("/", store);
// Show
router.get("/:slug", show);
// Update
router.patch("/:slug", update);
// destroy
router.delete("/:slug", destroy);
// By by project
router.get("/project/:projectId", meetingsByProjectId);

export default router;
