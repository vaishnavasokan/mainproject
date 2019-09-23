var express=require("express");
const router=express.Router();
var path=require('path');

var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var url="mongodb+srv://vaishnavasokan:Vysh1234*@cluster0-j3qq4.mongodb.net/mainproject?retryWrites=true&w=majority";

var user=require("../model/usermodel"); 
var login=require("../model/loginmodel")
var recruiter=require("../model/recruitermodel")
var job=require("../model/jobmodel")

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

  router.get("/fetchuser/:id", (req,res) =>
  {
    console.log('>>>>>>',req.params.id);
    user.findOne({_id:req.params.id}, (err,result) =>
    {
        if(err)
        throw err;
        else
        {
            if(result)
            res.send({data:result,"type":"user"});
            else
            { 
              recruiter.findOne({_id:req.params.id},function(err,result)
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
      user.find({_id:id},function(err,result){
        if (err) throw err;
        else
        {
            //console.log(result);
            res.send(result);
        }
      })
  })

  router.get("/viewrecruiter/:id",function(req,res)
  {
      var id =req.params.id;
      recruiter.find({_id:id},function(err,result){
        if (err) throw err;
        else
        {
            //console.log(result);
            res.send(result);
        }
      })
  })



router.post("/postjob",function(req,res)
{
  console.log(req.body);
  var j1 = new job();
  j1.jobtitle = req.body.jobtitle;
  j1.jdesc = req.body.jdesc;
  j1.qualification = req.body.qualification;
  j1.experience = req.body.experience;
  j1.openingAvailable = req.body.openingAvailable;
  j1.salary = req.body.salary;
  j1.jlocation = req.body.jlocation;


  j1.save((err)=>{
      if (err) throw err;
      else
      {
            console.log("Job Added.");
            res.redirect("/"); 
      }
  })
  
});    

router.get("/viewjobs",function(req,res){
  job.find({},function(err,result){
      if (err) throw err;
      else
      {
          //console.log(result);
          
          res.send(result);
      }
  })

  router.post("/updateuser/:id",function(req,res)
  {
    var id=req.params.id;
    //console.log("node il:"+id);
    var uname=req.body.name;
    var email=req.body.email;
    var mobno=req.body.mobno;
    var address=req.body.address;
    var location =req.body.location;
    
    user.updateOne({_id:id},{$set:{uname:uname,email:email,mobno:mobno,
      location:location,presentAddress:address}},function(err,result){
        if (err) throw err;
        else{
            console.log(result);
        }
    })
    
})
  
})

   
router.post("/getpopulate"), (req, res) => {
  job.find().populate('postedBy');
  res.send(res);
}

module.exports=router;