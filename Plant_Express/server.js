const express=require('express')
const app=express()

require('dotenv').config()
const morgan=require('morgan')
require('./db/connection')
const bodyParser=require('body-parser')
const cors=require('cors')
app.use(cors({
    origin:'http://localhost:3000'
}))

const categoryRoute=require('./routes/categoryRoute')
const productRoute=require('./routes/productRoute')
const userRoute=require('./routes/userRoute')
const orderRoute=require('./routes/orderRoute')
const paymentRoute=require('./routes/paymentRoute')

//middleware
app.use(morgan('dev'))
//to read json data
app.use(bodyParser.json())
app.use('/public/uploads',express.static('public/uploads'))

//routes
app.use('/api',categoryRoute)
app.use('/api',productRoute)
app.use('/api',userRoute)
app.use('/api',orderRoute)
app.use('/api',paymentRoute)

const port=process.env.PORT|| 5000
app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})