import express from "express";
import {
  store,
} from "../../controllers/app/project/projectBudgetController.js";
import { verifyTokenAndAdmin } from "../../middlewares/verifyToken.js";

const router = express.Router();

// Store
router.patch("/projectId/:projectId", verifyTokenAndAdmin, store);

export default router;
