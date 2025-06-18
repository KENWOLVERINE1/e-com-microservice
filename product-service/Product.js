const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
    Pid:{type:Number,required:true,unique:true},
    Pname:{type:String,required:true,unique:true},
    Pdescription:String,
    Pprice:{type:Number,required:true},
    Pstock:{type:Number,required:true},
    Pcolor:{type:String,required:true},
    Psize:{type:String,required:true},
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    Pimg:{type:String, required:true}
})