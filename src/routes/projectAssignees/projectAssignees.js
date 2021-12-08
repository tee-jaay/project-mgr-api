import express from "express";
import {
  index,
  store,
  update,
  destroy,
} from "../../controllers/app/project/projectAssigneeController.js";

const router = express.Router();

// Index
router.get("/", index);
// Store
router.post("/:projectId", store);
// Update
router.patch("/:slug", update);
// destroy
router.delete("/:slug", destroy);

export default router;
