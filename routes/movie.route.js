import express from 'express'
import {
    movieIndex,
    movieDelete,
    movieUpdate,
    movieCreate
} from '../controller/movies.controller.js'
const router = express.Router()

router.get('/', movieIndex)

router.get('/:id',)

router.post('/', movieCreate)

router.put('/:id', movieUpdate)

router.delete('/:id', movieDelete)

export default router