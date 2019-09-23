import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {RegisterService} from '../register.service'

@Component({
  selector: 'app-editrecruiter',
  templateUrl: './editrecruiter.component.html',
  styleUrls: ['./editrecruiter.component.css']
})
export class EditrecruiterComponent implements OnInit {

  rid;
  viewresult;
  constructor(private ar:ActivatedRoute, private rs:RegisterService) { }

  ngOnInit() {

    this.rid=this.ar.snapshot.paramMap.get("id")
      console.log("editprofile id:"+this.rid);
      
      this.rs.viewrecruiter(this.rid).subscribe(data=>
      {
          this.viewresult=data;
          console.log("update cheyaan "+this.viewresult[0]._id);
      })
  }

}
