import Job from "./../models/jobModels.js";

const createJob = async (req, res) => {
  const { title, description, qualifications,maxApplications,applicationsCount} = req.body
  if(!title || !description ||! qualifications ||!maxApplications){
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
export { createJob, getAllJob };