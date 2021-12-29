import express from "express";
import {
  store,
  show,
  update,
} from "../../controllers/app/page/termsPageController.js";

const router = express.Router();

// Create
router.post("/", store);
// Show
router.get("/", show);
// Update
router.patch("/", update);

export default router;
