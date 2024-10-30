import Job from "./../models/jobModels.js";

const createJob = async (req, res) => {
  const { title,company, description, qualifications,maxApplications,applicationsCount} = req.body
  if(!title || !company || !description ||! qualifications ||!maxApplications){
    return res.status(400).json("All fields are required")
  }

  const createJob = await Job.create({ ...req.body});
  if (createJob) {
    res.status(201).json(createJob)
  }
};

const getAllJob = async(req,res)=>{
  try {
    const all = await Job.find({})
    if(all){
      return res.status(200).json(all)
    }
    
  } catch (error) {
    res.status(500).json(error)
  }
}
const getAspecificJob = async(req,res)=>{
  try {
    const {id } = req.params
    const job = await Job.findById(id)
    if(job){
      return res.status(200).json(job)
    }
    
  } catch (error) {
    res.status(500).json(error)
  }
}
export { createJob, getAllJob, getAspecificJob };