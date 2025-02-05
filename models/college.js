import { Schema, model } from "mongoose";

const collegeSchema = new Schema({
    name:{ type: String, required: true},
    description:{ type: String, required: true},
    banner:{ type: String, required:true},
    location:{ type: String, required:true},
    rating:{ type: String, required:true},
},
{
    timestamps:true
});

export const CollegeModel = model('College', collegeSchema)