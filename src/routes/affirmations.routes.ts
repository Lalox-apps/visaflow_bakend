import { Router } from "express";
import { getAffirmations, createAffirmation } from "../controllers/affirmations.controller";

const router = Router();
router.get("/", getAffirmations);
router.post("/", createAffirmation);

export default router;
