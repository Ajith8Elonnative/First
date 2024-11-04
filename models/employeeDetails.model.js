const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    staffId:{
        type:String,
        required:true
    }, 
    empName:{
        type:String,
        
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
const result = new mongoose.model("Employee",schema)
module.exports = result

