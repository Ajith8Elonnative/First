const express = require("express")
const usercontroler = require('../controller/customerDetails.controller.js')
const route = express.Router()

route.get('/getAll', usercontroler.getAll)

route.post('/create', usercontroler.create)

route.put('/update/:id', usercontroler.update)

route.delete('/delete/:id', usercontroler.delete)

module.exports = route