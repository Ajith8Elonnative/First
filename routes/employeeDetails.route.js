const express = require("express")
const usercontroler = require('../controller/employeeDetails.controller.js')

const route = express.Router()

// route.get('/getAll', usercontroler.getAll)

route.get('/getId/:id', usercontroler.getId)

route.post('/create', usercontroler.create)

// route.get('/getrole/:id',usercontroler.getrole)
// route.get('/getAllrole',usercontroler.getAllrole)
route.get('/getAll', usercontroler.getAll);

route.put('/update/:id', usercontroler.update)

route.delete('/delete/:id', usercontroler.delete)

module.exports = route