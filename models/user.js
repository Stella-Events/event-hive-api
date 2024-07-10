import { Schema, model } from "mongoose";
<<<<<<< HEAD
import {toJSON} from '@reis/mongoose-to-json'
const userSchema = new Schema({
=======

const userModel = new Schema({
>>>>>>> 05e008e69fcf7fa9e6df4e9ee1f28e77056522de
    name:{ type:String, required:true},
    username:{ type:String, required:true, unique:true},
    email: { type:String, required:true, unique:true},
    password:{ type:String, required:true},
    avatar: { type:String, required:true},
  
},{
    timestamps:true
<<<<<<< HEAD
})

userSchema.plugin(toJSON)
export const UserModel = model('User', userSchema)
=======
})
>>>>>>> 05e008e69fcf7fa9e6df4e9ee1f28e77056522de
