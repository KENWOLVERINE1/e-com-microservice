const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    CategoryName:{type:String,required:true,unique:true},
    TypeofArt:String,
    Image:String,
    Products:[{type:mongoose.Schema.Types.ObjectId,ref:"productSchema"}]
})

const themeCategory = mongoose.model("Category",categorySchema);
module.exports=themeCategory;