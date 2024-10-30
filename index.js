import express from "express"
import cors from "cors"
import connectDb from "./config/db.js"
import dotenv from "dotenv"
import users from "./routes/userRoutes.js"
import jobs from "./routes/jobRoutes.js"


dotenv.config()


const app = express()
const corsOption = {
  origin:"https://api-mern-kuto.onrender.com/" || "http://localhost:8080",
  credentials:true
}

app.use(cors(corsOption));
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/users", users)
app.use("/jobs", jobs)
app.get("/",async(req,res)=>{
  res.json({
    alljobs:"jobs/all"
  })
})

//live api link = https://api-mern-kuto.onrender.com/

app.listen(process.env.PORT || 8080,()=>{
  connectDb()
  console.log("Server running on port 8080")
})