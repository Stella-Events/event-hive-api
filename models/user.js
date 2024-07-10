import { Schema, model } from "mongoose";

const userModel = new Schema({
    name:{ type:String, required:true},
    username:{ type:String, required:true, unique:true},
    email: { type:String, required:true, unique:true},
    password:{ type:String, required:true},
    avatar: { type:String, required:true},
  
},{
    timestamps:true
})