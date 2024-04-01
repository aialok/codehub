import express from "express";
const router = express.Router();

import { submitCode } from "../../controllers/submit-code.controller.js";

router.post("/submit-code", submitCode);

export default router;
