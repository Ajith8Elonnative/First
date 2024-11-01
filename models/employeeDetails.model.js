import { model, Schema } from "mongoose";

const shema = new Schema({
    staffId:{
        type:String,
        required:true
    },
    taskName:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default: Date.now
    },
    status:{
        type:String,
        required:true,
        required:true
    },
    description:{
        type:String,
        required:true
    }

})
export const results = model('Employee',shema )

