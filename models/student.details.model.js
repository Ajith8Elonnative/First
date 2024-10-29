import { model, Schema } from "mongoose"; 

const schema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required: [true, 'Phone number is required'],
        length:10,
        match: [
            /^(\+?\d{1,3}[- ]?)?\d{10}$/,
            'Please enter a valid phone number with or without country code'
        ]
    },
})
export const student = model('student',schema)
 