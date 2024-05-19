const Category=require('../models/categoryModel')

//to insert the category
exports.postCategory=async(req,res)=>{
    let category=new Category({
        category_name:req.body.category_name
    })
    category=await category.save()
    if(!category){
        return res.status(400).json({error:'something went wrong'})
    }
    res.send(category)
}