import express from "express"
import {
    customerGetAll,
    customerRegister,
    customerUpdate,
    customerDelete
}
    from '../controller/customerDetails.controller.js'
const route = express.Router()

route.get('/getAll', customerGetAll)

route.post('/register', customerRegister)

route.put('/update/:id', customerUpdate)

route.delete('/delete/:id', customerDelete)

export default route;