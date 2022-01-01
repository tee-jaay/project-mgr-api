import express from "express";
import {
  index,
  store,
  show,
  update,
} from "../../controllers/app/page/pageController.js";

const router = express.Router();

// List
router.get("/", index);
// Create
router.post("/", store);
// Show
router.get("/:pageType", show);
// Update
router.patch("/:pageType", update);

export default router;
