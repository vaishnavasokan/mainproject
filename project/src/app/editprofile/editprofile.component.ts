import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {RegisterService} from '../register.service'

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  uid;
  viewresult;

  updateid;
  name;
  email;
  mobno;
  address;
  location;

  updatdetails;

  constructor(private ar:ActivatedRoute, private rs:RegisterService) { }

  ngOnInit() 
  {
      //console.log("name :"+this.uname);
      this.uid=this.ar.snapshot.paramMap.get("id")
      console.log("ediprofile id:"+this.uid);
      
      this.rs.viewdata(this.uid).subscribe(data=>
      {
          this.viewresult=data;
          console.log("update cheyaan "+this.viewresult[0]._id);
      })
  }

  updateuser(id)
  {
    this.updateid= id;
    //console.log("iddddddddddddddddddd"+this.updateid);
    //this.rs.updatedata1(this.name,this.updateid,this.mobno,
    //this.address,this.location).subscribe(data=>

    this.rs.updatedata1(this.updateid).subscribe(data=>
      {
        this.updatdetails=data;
      })
  }

}
