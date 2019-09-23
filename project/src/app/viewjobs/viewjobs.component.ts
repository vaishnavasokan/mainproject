import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-viewjobs',
  templateUrl: './viewjobs.component.html',
  styleUrls: ['./viewjobs.component.css']
})
export class ViewjobsComponent implements OnInit {

  jobdetails;
  constructor(private rs:RegisterService,private rt:Router) { }

  ngOnInit() {

      this.rs.getjobs().subscribe(data=>{
      this.jobdetails=data;
      console.log("ref id :",this.jobdetails.postedBy);
      
      console.log("jobdetails:",this.jobdetails);
      
    })
  }

  
}
