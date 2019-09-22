import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service';
import {Router} from '@angular/router'
import { FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:8080/upload';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  public uploader:FileUploader=new FileUploader({
     url:URL,
     itemAlias:'resume',
     method:'POST'
   });

  uname;
  email;
  mobno;
  pswd;
  location;
  resume;
  userdetails;

  constructor(private rs:RegisterService,private rt:Router) { }

  ngOnInit() {

    this.uploader.onAfterAddingFile=(file)=>{
      file.withCredentials=false;
    }
    this.uploader.onBuildItemForm=(file:any,form:any)=>
    {
      form.append('uname',this.uname);
      form.append('email',this.email);
      form.append('mobno',this.mobno);
      form.append('location',this.location);
      form.append('pswd',this.pswd);
      form.append('resume',this.resume);
    }
  }
  

  public register()
  {
  this.uploader.uploadAll();    
    
  }
}
