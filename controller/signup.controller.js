const User = require('../models/signup.model.js')
const bcrypt = require('bcrypt')

exports.getall = async (req, res) => {
    try {
        const sign = await User.find()
        res.status(200).json(sign)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.signupUser = async (req, res) => {
    try {
        const {userName, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const post = new User({
            userName,
            password:hashedPassword
        })
        const saveAuth =await post.save()
        res.status(201).json(saveAuth)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.loginUser =async (req,res) =>{
    try {
        const {userName,password} = req.body
        console.log(userName, password)
        const existUser =await User.findOne({userName})
        console.log('user',existUser)
        if(!existUser){
            res.status(400).json({message:"invalid user name username"})
        }
        const validPassword =await bcrypt.compare(password,existUser.password)
        console.log(validPassword)
        if(!validPassword){
            res.status(400).json({message:""})
        }
        res.json({message:"login successfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}