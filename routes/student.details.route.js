import express from 'express'
import {
    deleteDetails,
    getDetails,
    registerDetails,
    updateDetails
} from '../controller/student.details.controller.js'
 const routes= express.Router()

routes.get('/', getDetails)

routes.post('/', registerDetails)

routes.put('/:id', updateDetails)

routes.delete('/:id', deleteDetails)

export default routes;
