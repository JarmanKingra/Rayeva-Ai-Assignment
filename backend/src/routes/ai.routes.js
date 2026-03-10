import express from "express";
import { generateCategory, generateB2BProposal } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/generate-category", generateCategory);
router.post("/generate-proposal", generateB2BProposal);

export default router;