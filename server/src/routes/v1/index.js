import express from "express";
const router = express.Router();

import { submitCodeController } from "../../controllers/submit-code.controller.js";

router.post("/submit-code", submitCodeController);

export default router;
