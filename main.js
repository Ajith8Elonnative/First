import express from 'express'
import customerDetailsRoutes from './routes/customerDetails.route.js'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cros from 'cors'

const app = express();
const PORT = 4000

app.use(cros())
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.send("Test")
})

mongoose.connect(process.env.MONGODB_URL)
.then(() =>console.log("Mongodb connected"))
.catch((error) =>console.error("Mongo db is not connected"))

app.use('/CustomerDetails', customerDetailsRoutes)
app.listen(PORT, () => {
    console.log(`successful running ${PORT}`)
})