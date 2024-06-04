const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema

const orderItemShcema=new mongoose.Schema({
    quantity:{
        type:Number,
        required:true
    },
    product:{
        type:ObjectId,
        required:true,
        ref:'Product'
    }
},{timestamps:true})

module.exports=mongoose.model('orderItems',orderItemShcema)