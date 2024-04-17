import express from "express";
const router = express.Router();

import { submitCodeController } from "../../controllers/submit-code.controller.js";
import problemController from "../../controllers/problem.controller.js";

router.post("/submit-code", submitCodeController);
router.post("/problems", problemController.createProblem);
router.get("/problems/:problemId", problemController.getProblemById);

export default router;
