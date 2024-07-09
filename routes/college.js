import { Router } from "express";
import { deleteCollege, getAllColleges, oneCollege, patchCollege, postColleges } from "../controllers/college.js";
import { remoteUpload } from "../middlewares/upload.js";
const collegeRouter= Router();

//creating routes
collegeRouter.get('/colleges', getAllColleges);

collegeRouter.get('/colleges', oneCollege);

collegeRouter.post('/colleges', remoteUpload.single('banner'), postColleges);

collegeRouter.patch('/colleges/id', patchCollege);

collegeRouter.delete('/colleges/id', deleteCollege);

export default collegeRouter