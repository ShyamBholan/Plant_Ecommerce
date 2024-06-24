const express=require('express')
const { postUser, userList, userDetails } = require('../controllers/userController')

const router=express.Router()

router.post('/register',postUser)
router.get('/userlist',userList)
router.get('/userdetail',userDetails)

module.exports=router