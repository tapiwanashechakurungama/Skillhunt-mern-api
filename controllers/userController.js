import bcrypt from "bcryptjs"
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

    const hashedPassword = await bcrypt.hash(password, 10)
    const createUser = await UserModel.create({email, password:hashedPassword, role})
    if(createUser){
      return res.status(201).json("user created")
    }
    
  } catch (error) {
    res.status(500).json(error)
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body; // Corrected typo here
    const findUser = await UserModel.findOne({ email });

    if (findUser) {
      const matchPassword = await bcrypt.compare(password, findUser.password);
      if (matchPassword) {
        // Create a token using only the user ID or necessary information
        const token =  jwt.sign({ id: findUser._id }, "nashesecreetkey", {
          expiresIn: "4d",
        });
        return res.status(200).json("User found"); // Send token in response
      } else {
        return res.status(401).json("Incorrect password"); // Corrected response status
      }
    } else {
      return res.status(400).json("No user with the given credentials"); // Fixed typo in "credentials"
    }
  } catch (error) {
    console.error(error); // Log error for debugging purposes
    return res.status(500).json({ message: "Internal server error" }); // More informative error message
  }
};


const getUser = async(req,res)=>{
  try {
    
    const { id } = req.params
    const findUser = await UserModel.findById(id)
    if(findUser){
      return res.status(200).json(findUser)
    }

  } catch (error) {
    res.status(500).json(error)
  }
}




export { register, login, getUser };