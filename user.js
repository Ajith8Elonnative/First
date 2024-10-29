const  mongoose  = require("mongoose");



const addressSchema =new mongoose.Schema ({
    city:String,
    pincode:Number
})
const userSchema = new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        min:1,
        max:100,
        validate:{
            validator:v =>v%2 ===0,
            message:props=>`${props.value} is not a even number`
        }
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        minLength:10
    },
    createAt:{
        type:Date,
        immutable:true,
        default:()=> Date.now()
    },
    updateAt:{
        type:Date,
        immutable:true,
        default:() =>Date.now()
    },
    friend:mongoose.SchemaTypes.ObjectId,
    hobbies:[String],
    address:addressSchema
    
})
userSchema.statics.findByName = function(name){
    return this.where({name: new RegExp(name,"i")})
}
userSchema.query.ByName = function(name){
    return this.where({name: new RegExp(name,"i")})
}
module.exports = mongoose.model("user",userSchema)