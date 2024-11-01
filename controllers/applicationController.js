import Application from "./../models/applicationModel.js"


const createApplication = async(req,res)=>{
  try {

    const { FullName, email, coverletter, phoneNumber } = req.body;

    if(!FullName || !email || !coverletter || !phoneNumber){
      return res.status(400).json("All fields are reuired")
    }

    const existingApplication = await Application.findOne({FullName,coverletter})
    if(existingApplication){
      return res.status(400).json("You have already applied for this job")
    }

    const createAppli = await Application.create(req.body)
    if(createAppli){
      return res.status(201).json(createAppli, "You have successfully applied for this job")
    }
    
  } catch (error) {
    res.status(500).json(error)
  }
}

const allApplication = async(req,res)=>{
  try {
    
    const all = await Application.find({})
    if(all){
      return res.status(200).json(all)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

const getAApplication = async(req,res)=>{
  try {
    const { id } = req.params

    const findApp = await Application.findById(id)
    if(findApp){
      return res.status(200).json(findApp);
    }
    
  } catch (error) {
    res.status(404).json('Not found sorry')
  }
}

const deleteApp = async(req,res)=>{
  try {
    const { id } = req.params
    const deleteApp = await Application.findByIdAndDelete(id)
    if(deleteApp){
      return res.status(200).json("The application deleted")
    }
    
  } catch (error) {
    res.status(500).json(error)
  }
}
export { createApplication, allApplication, getAApplication };