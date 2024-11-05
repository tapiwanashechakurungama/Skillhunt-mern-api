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

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/users", users)
app.use("/jobs", jobs)
app.get("/",async(req,res)=>{
  res.json({
    alljobs:"jobs/all",
    createjob:"jobs/create",
    emojis:"✔✔🐱‍🚀🐱‍👓🐱‍🐉"
  })
})

//live api link for backend = https://api-mern-kuto.onrender.com/
//live api link for frontend = https://skillhunt-mern-client.vercel.app/

app.listen(process.env.PORT || 8080,()=>{
  connectDb()
  console.log("Server running on port 8080")
})