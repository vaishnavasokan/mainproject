var express=require("express");
const router=express.Router();
var path=require('path');

var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var url="mongodb://localhost/project";

var user=require("../model/usermodel"); 
var login=require("../model/loginmodel")
var recruiter=require("../model/recruitermodel")

router.use(bodyparser.urlencoded({extended:true}))

router.post("/recruiterregister",function(req,res)
{
  console.log(req.body);
  var r1 = new recruiter();
  var l1= new login();
  r1.uname = req.body.uname;
  r1.email = req.body.email;
  r1.pswd = req.body.pswd;
  r1.mobno = req.body.mobno;
  r1.company = req.body.company;
  r1.designation = req.body.designation;
  r1.caddress = req.body.caddress;
  r1.cwebsite = req.body.cwebsite;
  r1.utype="recruiter";

  l1.email = req.body.email;
  l1.pswd = req.body.pswd;
  l1.utype="recruiter";

  r1.save((err)=>{
      if (err) throw err;
      else
      {
            console.log("Recruiter Added.");
            l1.save((err)=>{
            if (err) throw err;
            else
            {
                console.log("UserLogin Added.");
                res.redirect("/");
            }
          })
          
      }
  })
  
});    

  router.post("/login",function(req,res)
  {
    console.log(req.body);
    user.findOne({email:req.body.username,pswd:req.body.password},function(err,result)
    {
        if(err)
        throw err;
        else
        {
            if(result)
            res.send({data:result,"type":"user"});
            else
            { 
              recruiter.findOne({email:req.body.username,pswd:req.body.password},function(err,result)
              {
                  if(err)
                  throw err;
                  else
                  {
                      if(result)
                      res.json({data:JSON.parse(JSON.stringify(result)),"type":"recruiter"});
                      else
                      { 
                          console.log("invalid")
                          res.redirect("/")
                      }
                      
                  }
              })
            }
            
        }
    })
    
  })

  router.get("/view/:id",function(req,res)
  {
      var id =req.params.id;
      user.find({uname:id},function(err,result){
        if (err) throw err;
        else
        {
            //console.log(result);
            res.send(result);
        }
      })
  })

   

module.exports=router;