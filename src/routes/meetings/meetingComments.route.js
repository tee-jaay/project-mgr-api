import express from "express";
import {
  create,
  destroy,
} from "../../controllers/app/meeting/meetingCommentController.js";

const router = express.Router();

// Create
router.patch("/:meetingId", create);
// Destroy
router.delete("/:meetingId", destroy);

export default router;
