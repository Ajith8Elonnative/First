const customer = require("../models/customerDetails.model.js")
const express = require('express')

exports.getAll = async (req, res) => {
    try {
        const Customer = await customer.find()
        res.status(200).json(Customer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.create = async (req, res) => {
   
    try {
        
        const existingEmail = await customer.findOne({ email: req.body.email })
        const existingphoneNo =await customer.findOne({mobileNo:req.body.mobileNo})
        if (existingEmail || existingphoneNo) {
           
           return res.json({ message: "this email already exist please try another email" })
        }
            const {customerName,companyName,mobileNo,email,role,country,status} = req.body
            const newCustomer =await new customer({
                customerName,
                companyName,
                mobileNo,
                email,
                role,
                country,
                status 
            }
            )
            const Customer = await newCustomer.save()
            res.status(200).json(Customer)
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const {customerName,companyName,mobileNo,email,role,country,status} = req.body
        const customerUpdate = await customer.findByIdAndUpdate({ _id: id },
            {
                customerName,
                companyName,
                mobileNo,
                email,
                role,
                country,
                status   
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

exports.delete = async (req, res) => {
    try {
        await customer.findByIdAndDelete({ _id: req.params.id })
        res.json({ messagea: "deleted successfully" })
    } catch (error) {
        req.status(400).json({ message: error.message })
    }

}

