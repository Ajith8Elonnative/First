import express from 'express'
import employeeDetailsRoutes from './routes/employeeDetails.route.js'
import customerDetailsRoutes from './routes/customerDetails.route.js'
import signupRoutes from './routes/signup.route.js'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cros from 'cors'
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './swagger-output.json' assert { type: 'json' };

const app = express();
const PORT = 4000


app.use(cros())
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.get('/',(req,res)=>{
    res.send("this is for Test")
})

mongoose.connect(process.env.MONGODB_URL)
.then(() =>console.log("Mongodb connected"))
.catch((error) =>console.error("Mongo db is not connected"))

app.use('/EmployeeDetails', employeeDetailsRoutes)
app.use('/CustomerDetails',customerDetailsRoutes)
app.use('/api',signupRoutes)

app.listen(PORT, () => {
    console.log(`successful running ${PORT}`)
})