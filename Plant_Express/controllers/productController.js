const Product = require('../models/productModel')

//to insert products
exports.postProduct = async (req, res) => {
    let product = new Product({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        countInStock: req.body.countInStock,
        product_description: req.body.product_description,
        product_image: req.file.path,
        product_rating:req.body.product_rating,
        category: req.body.category
    })
    product = await product.save()
    if (!product) {
        return res.status(400).json({ error: 'something went wrong' })
    }
    res.send(product)
}
//to show all the products
exports.productList = async (req, res) => {
    const product = await Product.find()
    if (!product) {
        return res.status(400).json({ error: 'something went wrong' })
    }
    res.send(product)
}
//productdetails
exports.productDetails = async (req, res) => {
    const product = await Product.findById(req.params.id).populate('category', 'category_name')
    if (!product) {
        return res.status(400).json({ error: 'something went wrong' })
    }
    res.send(product)
}
//updateproduct
exports.updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id,
        {
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            countInStock: req.body.countInStock,
            product_description: req.body.product_description,
            product_image: req.body.product_image,
            product_rating:req.body.product_rating,
            category: req.body.category
        }, { new: true }
    )
    if (!product) {
        return res.status(400).json({ error: 'something went wrong' })
    }
    res.send(product)
}
//deleteproduct
exports.deleteProduct=async(req,res)=>{
    const product=await Product.findByIdAndDelete(req.params.id)
    .then(product=>{
        if (!product){
            return res.status(403).json({error:'product didnot found'})
        }
        else{
            return res.status(200).json({message:'product deleted'})
        }
    })
    .catch(err=>{
        return res.status(400).json({error:err})
    })
}
