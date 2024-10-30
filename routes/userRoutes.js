import { register } from "./../controllers/userController.js"
import express from "express" 

const router = express.Router()


router.post("/register",register)

export default router