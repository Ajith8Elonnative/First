import { model, Schema } from "mongoose";

const shema = new Schema({
    // id:{
    //     type: String,
    //     required:true
    // },
    empName: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique: true,
        lowercase: true, // Converts email to lowercase before saving
        match: [
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          'Please enter a valid email address' // Custom error message
        ]
    },
    reason: {
        type: String,
        required:true
    },
    description: {
        type: String
    }

})
export const employee = model('Employee',shema )