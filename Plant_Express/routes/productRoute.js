const express=require('express')

const{ postProduct, productList, productDetails, updateProduct, deleteProduct }=require('../controllers/productController')

const router=express.Router()
const upload=require('../middleware/fileUpload')
const { productValidation, Validation } = require('../validation/validator')

router.post('/postproduct',upload.single('product_image'),productValidation,Validation,postProduct)
router.get('/productlist',productList)
router.get('/productdetails/:id',productDetails)
router.put('/updateproduct/:id',upload.single('product_image'),productValidation,Validation,updateProduct)
router.delete('/deleteproduct/:id',deleteProduct)
module.exports=router