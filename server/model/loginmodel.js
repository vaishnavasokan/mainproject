var mongoose=require("mongoose");
var schema=mongoose.Schema; //instance created for schema

var loginschema=new schema(
    {
        email:{type:String,required:true},
        pswd:{type:String,required:true},
        utype:{type:String,required:true}
    }
)
var loginmodel=mongoose.model("login",loginschema,"login");
module.exports=loginmodel;