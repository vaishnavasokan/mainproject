//require express library
var express = require('express');
//require the express router
var router = express.Router();

var bodyparser = require("body-parser");

var mongoose = require("mongoose");
var url="mongodb://localhost/project";

var user=require("../model/usermodel"); 
var login=require("../model/loginmodel")

router.use(bodyparser.urlencoded({extended:true}))

mongoose.connect(url,{ useNewUrlParser: true },function(err)
{
    if(err)
    throw err;
    else
        console.log("DB Connected..");
})

//require multer for the file upload
var multer = require('multer');
var path=require('path');
var dest=path.join(path.dirname(__dirname),'/public/docs');

// set the directory to which the file is to be uploaded.
let storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,dest)
  },
  filename:(req,file,cb)=>{
    console.log(file);
    
    cb(null,file.fieldname+Date.now()+path.extname(file.originalname))
  }
})

//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name resume
var upload = multer({storage: storage}).single('resume');
/* GET home page. */

router.get('/', function(req, res, next) {
// render the index page, and pass data to it.
  res.render('index', { title: 'Express' });
});

//our file upload function.
router.route('/').post(function (req, res, next) {
     
    
    upload(req, res, function (err) 
    {
        console.log("dest"+path.join(path.dirname(__dirname),'/public/docs'));
        if (err) {
          // An error occurred when uploading
          console.log(err);
          return res.status(422).send("an Error occured")
        }  

        //console.log(req.body);
        //console.log(req.file);
        //console.log(req.file.filename);
        //console.log(req.file.originalname);

    //Adding user details and login
    var u1 = new user();
    var l1= new login();
    u1.uname = req.body.uname;
    u1.email = req.body.email;
    l1.email = req.body.email;
    u1.mobno = req.body.mobno;
    u1.pswd = req.body.pswd;
    l1.pswd = req.body.pswd;
    u1.location = req.body.location;
    console.log("here");
    u1.resume =req.file.filename;
    u1.utype="jobseeker";
    l1.utype="jobseeker";
    u1.save((err)=>{
        if (err) throw err;
        else
        {
              console.log("User Added.");
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
  
})
module.exports = router;