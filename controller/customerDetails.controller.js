import { customer } from "../models/customerDetails.model.js"

export const customerGetAll = async (req, res) => {
    try {
        const Customer = await customer.find()
        res.status(200).json(Customer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const customerRegister = async (req, res) => {
   
    
    try {
        
        const existingEmail = await customer.findOne({ email: req.body.email })
        const existingphoneNo =await customer.findOne({mobileNo:req.body.mobileNo})
        if (existingEmail || existingphoneNo) {
           
           return res.json({ message: "this email already exist please try another email" })
        }
            const newCustomer =await new customer({
                customerName: req.body.customerName,
                companyName: req.body.companyName,
                mobileNo: req.body.mobileNo,
                email: req.body.email,
                status: req.body.status
            }
            )
            const Customer = await newCustomer.save()
            res.status(200).json(Customer)
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
export const customerUpdate = async (req, res) => {
    try {
        const id = req.params.id
        const customerUpdate = await customer.findByIdAndUpdate({ _id: id },
            {
                customerName: req.body.customerName,
                companyName: req.body.companyName,
                phoneNo: req.body.phoneNo,
                email: req.body.email,
                status: req.body.status
            },
            {
                new: true
            }
        )
        res.status(201).json(customerUpdate)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const customerDelete = async (req, res) => {
    try {
        await customer.findByIdAndDelete({ _id: req.params.id })
        res.json({ messagea: "deleted successfully" })
    } catch (error) {
        req.status(400).json({ message: error.message })
    }

}

