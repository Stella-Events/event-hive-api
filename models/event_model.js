import {Schema, model, Types} from  "mongoose";

const eventSchema = new Schema ({
    name:{type: String , required:true},
    description:{type: String , required: true},
    collegeId:{type: String , required: true},
    location:{type:String , required: true},
    date:{type:String, required: true},
    tags:[{type:String}],
    type:{type:String ,enum:["online","offline"]},
    banner:{type:String, required:true},
    createdBy:{ type: Types.ObjectId, ref: 'user', required: true },

},{
    timestamps:true
}

)

export const EventModel = model ('event', eventSchema)