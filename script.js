const mongoose = require('mongoose')
const User = require('./user')
// const user = require('./user')

async function main(){
    try{
        mongoose.connect("mongodb://localhost/testdb")
const user =await User.findByName("ajith")
        // .where("name")
        // .equals("ajith")
        // .where("age")
        // .gt(12)
        // .limit(3)
        // .select("")

console.log(user)
    }catch(err){
        console.error(err.message)
    }
}

main()
