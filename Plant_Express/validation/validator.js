const { check, validationResult } = require('express-validator')
const multer=require('multer')

//category validation
exports.categoryValidation = [
    check('category_name', 'category is required').notEmpty().withMessage('category is required'),
    check('category_name', 'category must be atleast 3 characters').isLength({ min: 3 })
];

//product validation
exports.productValidation = [
    check('product_name', 'product name is required').notEmpty().isLength({ min: 4 }).withMessage('product name mus be of 4 characters'),
    check('product_price', 'price is required').notEmpty().isNumeric().withMessage('price must be numeric value'),
    check('countInStock', 'stock is required').notEmpty().isNumeric().withMessage('stock number must be numeric value'),
    check('product_description', 'product_description is required').notEmpty().isLength({ min: 20 }).withMessage('description must be of 20 characters and more'),
    check('product_rating', 'Product rating is required and must be between 0 and 5').notEmpty().isFloat({ min: 0, max: 5 }).withMessage('Rating must be between 0 and 5'),
    check('category', 'category is required').notEmpty()
]

//user validation
exports.userValidation=[
    check('name','name is required')
    .notEmpty()
    .isLength({min:3})
    .withMessage('name must be at least of 3 characters'),
    check('email','email is required').notEmpty()
    .isEmail().withMessage('email format is incorrect')
]

//password validation
exports.passwordValidation=[
    check('password','password is required')
    .notEmpty()
    .matches(/[a-z]/).withMessage('password must contain one lowercase')
    .matches(/[A-Z]/).withMessage('password must contain one Uppercase letter')
    .matches(/[0-9]/).withMessage('password must contain one numeric values')
    .matches(/[@#$_?!]/).withMessage('password must contain special characters')
    .isLength({min:8}).withMessage('password must be minimum of 8 characters')
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