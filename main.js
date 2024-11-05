const express = require('express')
const employeeDetailsRoutes = require('./routes/employeeDetails.route.js')
const customerDetailsRoutes = require('./routes/customerDetails.route.js')
const signupRoutes = require('./routes/signup.route.js')
const mongoose = require("mongoose");
const dotenv = require('dotenv')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger-output.json')
const bodyparser = require('body-parser')

const app = express();
const PORT = 4000

app.use(cors({
    origin:"https://signup-and-login.onrender.com"
}))
app.use(bodyparser.json())
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.send("this is for Test")
})

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Mongodb connected"))
    .catch((error) => console.error("Mongo db is not connected"))

app.use('/EmployeeDetails', employeeDetailsRoutes)
app.use('/CustomerDetails', customerDetailsRoutes)
app.use('/api', signupRoutes)

app.listen(PORT, () => {
    console.log(`successful running ${PORT}`)
})