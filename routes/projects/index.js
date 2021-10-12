import express from "express";
import { index } from "../../controllers/app/project/index.js";

const router = express.Router();

// Index
router.get("/", index);

export default router;
