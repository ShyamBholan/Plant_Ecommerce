const express=require('express')
const { postUser, userList, userDetails, postEmailConfirmation, signIn, forgetPassword, resetPassword, signOut} = require('../controllers/userController')

const router=express.Router()

router.post('/register',postUser)
router.put('/confirmation/:token',postEmailConfirmation)
router.post('/signin',signIn)
router.post('/forgetpassword',forgetPassword)
router.put('/resetpassword/:token',resetPassword)
router.get('/userlist',userList)
router.get('/userdetail/:id',userDetails),
router.post('/signout',signOut)


module.exports=router