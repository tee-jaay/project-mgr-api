import express from "express";
import {
  create,
  destroy,
} from "../../controllers/app/issue/issueCommentController.js";

const router = express.Router();
// Create
router.patch("/:issueId", create);
// Destroy
router.delete("/:issueId", destroy);

export default router;
