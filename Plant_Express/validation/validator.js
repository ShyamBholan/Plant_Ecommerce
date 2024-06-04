const { check, validationResult } = require('express-validator')

exports.categoryValidation = [
    check('category_name', 'category is required').notEmpty().isAlpha().isLength({ min: 3 }).withMessage('category must be atleast 3 characters')
]

exports.productValidation = [
    check('product_name', 'product name is required').notEmpty().isLength({ min: 4 }).withMessage('product name mus be of 4 characters'),
    check('product_price', 'price is required').notEmpty().isNumeric().withMessage('price must be numeric value'),
    check('countInStock', 'stock is required').notEmpty().isNumeric().withMessage('stock number must be numeric value'),
    check('product_description', 'product_description is required').notEmpty().isLength({ min: 20 }).withMessage('description must be of 20 characters and more'),
    check('product_rating', 'Product rating is required and must be between 0 and 5').notEmpty().isFloat({ min: 0, max: 5 }).withMessage('Rating must be between 0 and 5'),
    check('category', 'category is required').notEmpty()
]

exports.Validation = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        next()
    }
    else {
        return res.status(400).json({ error: errors.array()[0].msg })
    }
}