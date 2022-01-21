import express from "express";
import {
  sendEmails
} from "../../controllers/app/message/messageController.js";

const router = express.Router();

// Send
router.post("/send-emails", sendEmails);

export default router;
