import bcypt from "bcryptjs"
import jwt from "jsonwebtoken"
import UserModel from "./../models/userModel.js"



const register = async(req,res)=>{
  try {
    const { email ,password,role} = req.body
    if(!email || !password || !role){
      return res.status(400).json("All field are required")
    }

    const existingUser = await UserModel.findOne({email})
    if(existingUser){
      return res.status(400).json("the user with the same email already exists try to login if you are the one")
    }

    const hashedPassword = await bcypt.hash(password, 10)
    const createUser = await UserModel.create({email, password:hashedPassword, role})
    if(createUser){
      return res.status(201).json("user created")
    }
    
  } catch (error) {
    res.status(500).json(error)
  }
}




export { register}