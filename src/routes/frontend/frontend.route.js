import express from "express";
import { site } from "../../controllers/app/frontend/frontendController.js";

const router = express.Router();

// Site
router.get("/site", site);

export default router;
