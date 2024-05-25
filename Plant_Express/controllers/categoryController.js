const Category = require('../models/categoryModel')

//to insert the category
exports.postCategory = async (req, res) => {
    let category = new Category({
        category_name: req.body.category_name
        //user bata data line & pachadi ko category_name key hoo
    })
    // to check if category already exist in database
    Category.findOne({ category_name: category.category_name })
        .then(async categories => {
            if (categories) {
                return res.status(400).json({ error: 'category must be unique' })
            }
            else {
                category = await category.save()
                if (!category) {
                    return res.status(400).json({ error: 'something went wrong' })
                }
                res.send(category)
            }
        })
        .catch(err => res.status(400).json({ error: err }))
}
//to retrive all datas
exports.categoryList=async(req,res)=>{
    const category=await Category.find()
    if(!category){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(category)
}