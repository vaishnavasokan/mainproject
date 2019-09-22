var mongoose=require("mongoose");
var schema=mongoose.Schema;//instance created for schema

var userschema=new schema(
    {
        uname:{type:String,required:true},
        email:{type:String,required:true},
        mobno:{type:Number,required:true},
        pswd:{type:String,required:true},
        location:{type:String,required:true},
        resume:{type:String,required:true},
        utype:{type:String,required:true}
        
    }
)
var usermodel=mongoose.model("users",userschema,"users");
module.exports=usermodel;