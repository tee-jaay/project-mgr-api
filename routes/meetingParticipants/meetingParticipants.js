import express from "express";
import {
  index,
  store,
  show,
  update,
  destroy,
} from "../../controllers/app/meetingParticipant/meetingParticipantController.js";

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

export default router;
