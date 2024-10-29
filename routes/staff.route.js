import express from 'express'
import { staffRegister, staffGetall, staffDetail, staffUpdate, staffDelete} from '../controller/staff.controller.js'
const routes = express.Router()

routes.get('/',staffGetall)

routes.post('/',staffRegister)

routes.get('/:id',staffDetail)

routes.put('/:id',staffUpdate)

routes.delete('/:id',staffDelete)
export default routes;