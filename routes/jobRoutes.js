import express from "express"
import {createJob, getAllJob} from "../controllers/jobController.js";

const router = express.Router()

router.post("/create", createJob);
router.get("/all", getAllJob);

export default router