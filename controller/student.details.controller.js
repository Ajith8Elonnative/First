import { student } from "../models/student.details.model.js"

import hashGen from '../hashPassword/hashing.js'

export const getDetails = async (req, res) => {
    try {
        const Student = await student.find()
        res.status(200).json(Student)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}
export const registerDetails = async (req, res) => {
    const hashPassword =hashGen(req.body.password)
    const existingEmail =await student.findOne({email: req.body.email})
    const newStudent = new student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password:(await hashPassword).toString() ,
        phoneNo: req.body.phoneNo,
    })
    try {
        if(existingEmail){
            res.json({message:"this email already exist please try another email"})
        }else{
            const Student = await newStudent.save()
        res.status(200).json(Student)
        }
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const updateDetails = async (req, res) => {
    try {
        const hashPassword =hashGen(req.body.password)
        const existingEmail =await student.findOne({email: req.body.email})
        const updateStudent = await student.findOneAndUpdate({ _id: req.params.id },
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password:(await hashPassword).toString() ,
                phoneNo: req.body.phoneNo
            }, {
            new: true
        }
        )
        res.status(201).json(updateStudent)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }


}
export const deleteDetails =async (req, res) => {
    const studentId = req.params.id
    try {
        console.log(student.id)
        await student.findByIdAndDelete({ _id: studentId })
        res.json({ message: `successful deleted ` })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
