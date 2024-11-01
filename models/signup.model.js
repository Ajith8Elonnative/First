import { model, Schema } from "mongoose";


const shema = new Schema({
    userName:{
        type:String,
        required:true,
        unique: true,
        lowercase: true, // Converts email to lowercase before saving
        match: [
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          'Please enter a valid email address' // Custom error message
        ]
    },
    password:{
        type:String,
        required:true
    }
})
export const User = model('user',shema)

