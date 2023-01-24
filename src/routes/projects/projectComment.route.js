import express from "express";
import {
  create,
  index,
  store,
} from "../../controllers/app/project/projectCommentController.js";

const router = express.Router();

// Index
router.get("/", index);
// Store
router.post("/", store);
// Create
router.patch("/projectId/:projectId", create);

export default router;
