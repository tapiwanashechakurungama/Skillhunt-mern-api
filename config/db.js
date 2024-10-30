
import mongoose from "mongoose"


const connectDb = async()=>{
  try {

    await mongoose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://chakurungamatapiwanashe:<db_password>@cluster0.gkrho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connected to mongodb")
    
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
//password = ufqWeRkXd1XDWfp1

export default connectDb