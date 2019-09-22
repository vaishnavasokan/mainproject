import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {RegisterService} from '../register.service'

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  uname;
  viewresult;
  constructor(private ar:ActivatedRoute, private rs:RegisterService) { }

  ngOnInit() 
  {
      console.log("update :"+this.uname);
      this.uname=this.ar.snapshot.paramMap.get("id")
      this.rs.viewdata(this.uname).subscribe(data=>
      {
          this.viewresult=data;
          console.log(this.viewresult);
      })
  }

}
