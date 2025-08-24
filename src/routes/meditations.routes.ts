import { Router } from "express";
import { getMeditations, createMeditation } from "../controllers/meditations.controller";

const router = Router();
router.get("/", getMeditations);
router.post("/", createMeditation);

export default router;
