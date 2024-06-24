const User=require('../models/userModel')
const token=require('../models/tokenModel')

const crypto=require('crypto')

//to register user
exports.postUser = async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    res.send(user)
}

//user list
exports.userList = async (req, res) => {
    const user = await User.find()
        .select('-hashed_password')
        .select('-salt')
    if (!user) {
        return res.status(400).json({ error: "something went wrong" })
    }
    res.send(user)
}

//user details
exports.userDetails=async(req,res)=>{
    const user=await User.findById()
    if(!user){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(user)
}