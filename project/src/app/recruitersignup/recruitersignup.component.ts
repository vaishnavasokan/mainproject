import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../register.service'
import { Router } from '@angular/router';
import {AlertService} from '../alert.service'


@Component({
  selector: 'app-recruitersignup',
  templateUrl: './recruitersignup.component.html',
  styleUrls: ['./recruitersignup.component.css']
})
export class RecruitersignupComponent implements OnInit {

  uname;
  email;
  pswd;
  mobno;
  company;
  designation;
  caddress;
  cwebsite;
  recdetails;

  constructor( private router: Router,private rs:RegisterService,
    private alertService: AlertService) { }

  ngOnInit() {


  }
  
public register()
{
  console.log("rname: "+this.uname);
  
    this.rs.addrecruiter(this.uname,this.email,this.pswd,
    this.mobno,this.company,this.designation,
    this.caddress,this.cwebsite).subscribe(data=>{
    this.recdetails=data;
    //this.alertService.success('Registration successful', true);
    this.router.navigate([""]);
    })
  }

}

