import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { toggleBookmark, applyJob } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/bookmark", protect, toggleBookmark);
router.post("/apply", protect, applyJob);

export default router;
