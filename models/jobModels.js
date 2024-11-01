import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company:{type: String, required:true},
  location:{type: String, required:true},
  type:{type: String, required:true},
  description: { type: String, required: true },
  qualifications: { type: String },
  maxApplications: { type: Number, required: true },
  applicationsCount: { type: Number, default: 0 },
  // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },/
});

const Job = mongoose.model("Job", jobSchema);
export default Job;
