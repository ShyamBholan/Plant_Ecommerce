const express=require('express')

const { postCategory, categoryList, categoryDetails, updateCategory, deleteCategory } = require('../controllers/categoryController')
const { categoryValidation, Validation } = require('../validation/validator')
const { requireSignin, requireAdmin } = require('../controllers/userController')

const router=express.Router()

router.post('/postcategory',requireSignin,requireAdmin,categoryValidation,Validation,postCategory)
router.get('/categorylist',categoryList)
router.get('/categorydetails/:id',categoryDetails)
router.put('/updatecategory/:id',requireSignin,requireAdmin,categoryValidation,Validation,updateCategory)
router.delete('/deletecategory/:id',requireSignin,requireAdmin,deleteCategory)

module.exports=router