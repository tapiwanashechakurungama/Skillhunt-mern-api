
import mongoose from "mongoose"


const connectDb = async()=>{
  try {

    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongodb")
    
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
//password = ufqWeRkXd1XDWfp1

export default connectDb