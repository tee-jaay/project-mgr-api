import express from "express";
import {
  store,
  show,
  update,
} from "../../controllers/app/page/homePageController.js";

const router = express.Router();

// Create
router.post("/", store);
// Show
router.get("/", show);
// Update
router.patch("/update", update);

export default router;
