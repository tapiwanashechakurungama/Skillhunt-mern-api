import express from "express"
import {createJob, getAllJob, getAspecificJob} from "../controllers/jobController.js";

const router = express.Router()

router.post("/create", createJob);
router.get("/all", getAllJob);
router.get("/:id", getAspecificJob);

export default router