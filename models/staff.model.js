import { model, Schema } from "mongoose";

const schema = new Schema({
    companyName:{
        type:String,
        required:[true, "companyName is required"],
        minlength: 5,
        maxlength: 50
    },
    empName:{
        type:String,
        required:[true, "empName is required"]
    },
    empId:{
        type:Number,
        required:[true, "empId is required"]
    },
    email:{
        type:String,
        required:[true, "email is required"],
        
    },
    phoneNo:{
        type:Number,
        required:[true, "phoneNo is required"],
        match: [
            /^(\+?\d{1,3}[- ]?)?\d{10}$/,
            'Please enter a valid phone number with or without country code'
        ]
    },
    role:{
        type:String,
        required:[true, "role is required"]
    },
    salary:{
        type:String
    },
})
const staff = model('staff',schema)
export default staff