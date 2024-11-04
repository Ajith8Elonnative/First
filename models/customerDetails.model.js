const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    mobileNo: {
        type: Number,
        required: true,
        unique: true,
        maxlength: 10,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v);  // Validates a 10-digit number
            },
            message: props => `${props.value} is not a valid 10-digit mobile number!`
        }
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type:String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
})

const result = new mongoose.model("customer",schema)
module.exports = result