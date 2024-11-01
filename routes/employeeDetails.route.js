import express from 'express'
import {
    deleteEmployeeDetails,
    getEmployeeDetails,
    getId,
    registerEmployeeDetails,
    updateEmployeeDetails
} from '../controller/employeeDetails.controller.js'


const route = express.Router()

route.get('/getAll', getEmployeeDetails)

route.get('/getId/:id', getId)

route.post('/register', registerEmployeeDetails)

route.put('/update/:id', updateEmployeeDetails)

route.delete('/delete/:id', deleteEmployeeDetails)

export default route;