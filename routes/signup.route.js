import express from"express"
import { signupGetall, signupUser, loginUser } from "../controller/signup.controller.js";
import { Route } from "express";

const routes = express.Router()
routes.get('/getAll',signupGetall) 

routes.post('/signup',signupUser)

routes.post('/login', loginUser )

export default routes;