import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["employer", "jobSeeker"], default: "jobSeeker" },
});


const UserModel = new mongoose.model("User",userSchema)

export default UserModel