const express=require('express')

const{ postProduct, productList }=require('../controllers/productController')

const router=express.Router()
const upload=require('../middleware/fileUpload')

router.post('/postproduct',upload.single('product_image'),postProduct)
router.get('/productlist',productList)

module.exports=router