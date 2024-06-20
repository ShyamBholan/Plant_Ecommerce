const express=require('express')
const { postUser, userList } = require('../controllers/userController')

const router=express.Router()

router.post('/register',postUser)
router.get('userlist',userList)

module.exports=router