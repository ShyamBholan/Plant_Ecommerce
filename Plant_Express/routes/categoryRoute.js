const express=require('express')
const { postCategory, categoryList, categoryDetails, updateCategory, deleteCategory } = require('../controllers/categoryController')
const { categoryValidation, Validation } = require('../validation/validator')
const router=express.Router()

router.post('/postcategory',categoryValidation,Validation,postCategory)
router.get('/categorylist',categoryList)
router.get('/categorydetails/:id',categoryDetails)
router.put('/updatecategory/:id',updateCategory)
router.delete('/deletecategory/:id',deleteCategory)


module.exports=router