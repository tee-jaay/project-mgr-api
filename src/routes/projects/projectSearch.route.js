import express from "express";
import { search } from "../../controllers/app/project/projectController.js";

const router = express.Router();

// Search
router.post("/:_keyword", search);

export default router;
