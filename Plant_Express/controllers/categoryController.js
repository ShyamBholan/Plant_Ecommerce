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
//to retrive all datas or category list
exports.categoryList=async(req,res)=>{
    const category=await Category.find()
    if(!category){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(category)
}
//category datils 
exports.categoryDetails=async(req,res)=>{
    const category=await Category.findById(req.params.id)
    if(!category){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(category)
}
//update category
exports.updateCategory=async(req,res)=>{
    const category=await Category.findByIdAndUpdate(
        req.params.id,
        {
            category_name:req.body.category_name
        },
        {
            new:true
        }
    )
    if(!category){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(category)
}
// delete category
exports.deleteCategory=async(req,res)=>{
    const category=await Category.findByIdAndDelete(req.params.id)
    .then(category=>{
        if(!category){
            return res.status(403).json({error:'category with this id did not found'})
        }
        else{
            return res.status(200).json({message:'category deleted'})
        }
    })
    .catch(err=>{
        return res.status(400).json({error:err})
    })
}