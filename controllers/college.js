import { CollegeModel } from "../models/college.js";

//Function to add colleges
export const postColleges = async (req,res,next) => {
 //sending request
 try {
    const addcolleges = await CollegeModel.create({...req.body,
        image: req.file.filename});
   
     //response
     res.status(201).json(addcolleges);
 
    } catch (error) {
    next(error);
 }

}

//Function to Get all colleges
export const getAllColleges = async (req,res,next) => {
    
    try {
        const allColleges = await CollegeModel.find();
        res.status(200).json(allColleges)
    } catch (error) {
        next(error);
    }
};

export const oneCollege = async (req,res,next) => {
    try {

        const oneData = await CollegeModel.findById(req.params.id);
        if (!oneData) {
            // Handle case when document with the given ID is not found
            return res.status(404).json({ error: 'Page not found' });
          }

        res.status(200).json(oneData);
    } catch (error) {
        next(error)
   }
}

export const deleteCollege = async (req,res,next) => {
    
    try {
        //find by id and delete
       const deleteData = await CollegeModel.findByIdAndDelete(req.params.id)
       //response
        res.status(200).json('Pages deleted')
    } catch (error) {
      next(error)
    }
  }

export const patchCollege = async (req,res,next) => {
        try {
            //find by id and update
        const updatedCollege = await College.Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
         //response
         res.status(200).json(updatedCollege);
        } catch (error) {
            next(error)
        }
}
