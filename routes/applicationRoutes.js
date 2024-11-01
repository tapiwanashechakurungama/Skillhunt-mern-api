import express from "express"
import { allApplication, createApplication, getAApplication } from "../controllers/applicationController.js";

const router = express.Router()

router.post("/apply", createApplication);
router.get("/all", allApplication);
router.get("/:id", getAApplication);

export default router