import express from "express"
import cors from "cors"
import connectDb from "./config/db.js"
import dotenv from "dotenv"
import users from "./routes/userRoutes.js"


dotenv.config()


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/users", users)



app.listen(process.env.PORT || 8080,()=>{
  connectDb()
  console.log("Server running on port 8080")
})