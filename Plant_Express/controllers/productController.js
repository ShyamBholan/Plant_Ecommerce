const Product = require('../models/productModel');
const fs = require('fs');

// To insert products
exports.postProduct = async (req, res) => {
    let product = new Product({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        countInStock: req.body.countInStock,
        product_description: req.body.product_description,
        product_image: req.file.path,
        product_rating: req.body.product_rating,
        category: req.body.category
    });
    product = await product.save();
    if (!product) {
        return res.status(400).json({ error: 'Something went wrong' });
    }
    res.send(product);
};

// To show all the products
exports.productList = async (req, res) => {
    Product.find()
        .then(products => {
            if (products.length === 0) {
                return res.status(404).json({ message: 'No products found' });
            }
            res.json(products);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        });
};


// Product details
exports.productDetails = async (req, res) => {
    const product = await Product.findById(req.params.id).populate('category', 'category_name');
    if (!product) {
        return res.status(400).json({ error: 'Something went wrong' });
    }
    res.send(product);
};

// Update product
exports.updateProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    if (req.file) {
        // Delete the old image if a new one is uploaded
        if (product.product_image && fs.existsSync(product.product_image)) {
            fs.unlinkSync(product.product_image);
        }
        product.product_image = req.file.path;
    }

    product.product_name = req.body.product_name || product.product_name;
    product.product_price = req.body.product_price || product.product_price;
    product.countInStock = req.body.countInStock || product.countInStock;
    product.product_description = req.body.product_description || product.product_description;
    product.product_rating = req.body.product_rating || product.product_rating;
    product.category = req.body.category || product.category;

    const updatedProduct = await product.save();
    if (!updatedProduct) {
        return res.status(400).json({ error: 'Something went wrong' });
    }
    res.send(updatedProduct);
};

// Delete product
exports.deleteProduct = async (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(product => {
            if (!product) {
                return res.status(403).json({ error: 'Product not found' });
            }

            // Delete the product image from the server
            if (product.product_image && fs.existsSync(product.product_image)) {
                fs.unlinkSync(product.product_image);
            }

            return res.status(200).json({ message: 'Product deleted' });
        })
        .catch(err => {
            return res.status(400).json({ error: err.message });
        });
};