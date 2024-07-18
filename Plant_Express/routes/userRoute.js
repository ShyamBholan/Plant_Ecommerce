const express=require('express')

const { postUser, userList, userDetails, postEmailConfirmation, signIn, forgetPassword, resetPassword, signOut, requireSignin, requireAdmin} = require('../controllers/userController')
const { userValidation, passwordValidation, Validation } = require('../validation/validator')

const router=express.Router()

router.post('/register',userValidation,passwordValidation,Validation,postUser)
router.put('/confirmation/:token',postEmailConfirmation)
router.post('/signin',signIn)
router.post('/forgetpassword',forgetPassword)
router.put('/resetpassword/:token',passwordValidation,Validation,resetPassword)
router.get('/userlist',requireSignin,requireAdmin,userList)
router.get('/userdetail/:id',requireSignin,userDetails)
router.post('/signout',signOut)

module.exports=router