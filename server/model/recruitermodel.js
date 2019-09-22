var mongoose=require("mongoose");
var schema=mongoose.Schema;//instance created for schema

var recruiterschema=new schema(
    {
        uname:{type:String,required:true},
        email:{type:String,required:true},
        mobno:{type:Number,required:true},
        pswd:{type:String,required:true},
        company:{type:String,required:true},
        designation:{type:String,required:true},
        caddress:{type:String,required:true},
        cwebsite:{type:String,required:true},
        utype:{type:String,required:true}
    }
)
var recruitermodel=mongoose.model("recruiters",recruiterschema,"recruiters");
module.exports=recruitermodel;