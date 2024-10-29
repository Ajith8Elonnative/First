import { employee } from "../models/employeeDetails.model.js";

export const getEmployeeDetails = async (req, res) => {
    try {
        const empDetails = await employee.find()
        res.status(200).json(empDetails)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const registerEmployeeDetails = async (req, res) => {
    try {
        const existEmail = await employee.findOne({ email: req.body.email })
        if (existEmail) {
            return   res.json({ message: "this email already exist please try another email" })
        }
        const newEmployee = await new employee({
            
            empName: req.body.empName,
            email: req.body.email,
            reason: req.body.reason,
            description: req.body.description
        })
        const saveEmp = await newEmployee.save()
        res.status(201).json(saveEmp)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const updateEmployeeDetails = async (req, res) => {
    try {

        const update = await employee.findByIdAndUpdate({ _id: req.params.id },
            {
                
                empName: req.body.empName,
                email: req.body.email,
                reason: req.body.reason,
                description: req.body.description
            },
            {
                new: true
            }
        )
        res.status(201).json(update)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const deleteEmployeeDetails =async (req, res) => {
    try {
        const id = req.params.id
        await employee.findByIdAndDelete({_id:id})
        res.json({message:"successful deleted"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
} 