import express from "express";
import { index } from "../../controllers/app/dashboard/dashboardController.js";

const router = express.Router();

router.get("/", index);

export default router;
