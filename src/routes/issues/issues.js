import express from "express";
import {
  index,
  store,
  show,
  update,
  destroy,
  issuesByProjectId,
} from "../../controllers/app/issue/issueController.js";

const router = express.Router();

// Index
router.get("/", index);
// Store
router.post("/:projectId", store);
// Show
router.get("/:issueId", show);
// Update
router.patch("/:issueId", update);
// destroy
router.delete("/:issueId", destroy);
// By by project
router.get("/project/:projectId", issuesByProjectId);

export default router;
