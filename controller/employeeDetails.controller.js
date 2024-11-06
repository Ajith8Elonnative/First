const results = require("../models/employeeDetails.model.js")
const Role = require('../models/customerDetails.model.js')
// exports.getAll = async (req, res) => {
//     try {
   
//         const empDetails = await results.find()
//         const empMap = await empDetails.map(emp =>({
//             staffId:emp.staffId
//         }))

//         const getCust = await Role.find()

//         const custMap = await getCust.map(customer =>({
//             id:customer.id
//         }))
//         console.log(custMap)
//         console.log(empMap)
      
//         res.status(200).json(empDetails)
       
//     } catch (error) {
//         res.status(400).json({ message: error.message })
//     }
// }

exports.getAll = async(req,res)=>{
    try{
        const customerData = await Role.find()
        if(!customerData){
            return res.status(404).json({message:"customerdetails not found"})
        }
        const employeeStaffdata = await results.find()
        if(!employeeStaffdata){
            return res.status(404).json({message:"employeestaffdata not found"})
        }
        customerData.forEach(customer => {
            employeeStaffdata.forEach(employee => {
                if (customer._id.toString() === employee.staffId) {
                    console.log(`${customer.id}: ${customer.role}`);
                    const exactRole = customer.role
                    
                    const push = employeeStaffdata.push({exactRole})
                   console.log(push)
                }
            });
        });
        
        res.status(200).json(employeeStaffdata)
      
    }catch(error){
        res.status(500).json({message:"Internal server error"})
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
        const {staffId,empName,taskName,date,status,description} = req.body
        const newEmployee =await results.create({
            staffId,
            empName,
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
        const {staffId,empName,taskName,role,date,status,description} = req.body
        const update = await results.findByIdAndUpdate({ _id: req.params.id },
            {
            staffId,
            empName,
            taskName,
            role,
            date,
            status ,
            description
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
exports.getrole = async (req, res) => {
    try {
        const id = req.params.id;
        
        // Fetch the customer by _id
        const customer = await Role.findById(id);
        
        // Check if the customer exists
        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        // Retrieve the role from the customer document
        const role = customer.role;
        const country = customer.country
        
        // Respond with the role
        res.json({ role ,country});
    } catch (error) {
        console.error("Error fetching role:", error);
        res.status(500).json({ message: "Server error" });
    }
};