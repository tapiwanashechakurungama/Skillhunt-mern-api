import mongoose from "mongoose"

const applicationSchema = new mongoose.Schema({
  FullName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique : true },
  coverletter: { type: String, required:true},
  phoneNumber:{type:Number, required:true}
})


const Application = new mongoose.model("Application", applicationSchema)

export default Application