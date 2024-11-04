const results = require("../models/employeeDetails.model.js")

exports.getAll = async (req, res) => {
    try {
        const empDetails = await results.find()
        res.status(200).json(empDetails)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.getId =async(req,res) =>{
    try {
        const id =req.params.id
        const getId = await results.findOne({_id:id})
        res.status(200).json(getId)

    } catch (error) {
        res.status(400).json({ message: error.message }) 
    }
}

exports.create = async (req, res) => {
    try {
        const {staffId,taskName,date,status,description} = req.body
        const newEmployee =await results.create({
            staffId,
            taskName,
            date,
            status ,
            description
        })
        console.log(newEmployee)
      await  newEmployee.save()
        // console.log(saveEmp)
        res.send({message:"Employee is added",data:newEmployee})
    } catch (error) {
        res.status(400).json({ message:error.message })
    }
}

exports.update = async (req, res) => {
    try {

        const update = await results.findByIdAndUpdate({ _id: req.params.id },
            {
                
                staffId:req.body.staffId,
                taskName:req.body.taskName,
                date :req.body.date,
                status :req.body.status,
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

exports.delete =async (req, res) => {
    try {
        const id = req.params.id
        await results.findByIdAndDelete({_id:id})
        res.json({message:"successful deleted"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
} 