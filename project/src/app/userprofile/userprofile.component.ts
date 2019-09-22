import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  view:boolean;

  constructor(
    private rs:RegisterService,
    private rt:Router,
    public route:ActivatedRoute
    ) { }

    public i=null;
  ngOnInit() {

    //console.log(this.route.snapshot.params.info);
    this.i=JSON.parse(this.route.snapshot.params.info);
    console.log(this.i);
    console.log("**usertype**"+this.i.utype);

    if(this.i.utype=="jobseeker")
        document.getElementById("jobseekerdiv").style.display="block";
    else
        document.getElementById("recruiterdiv").style.display="block";
    
      
  }

  public editprofile(id)
  {
      console.log("edit uname: "+id);
      this.rt.navigateByUrl("/editprofile/"+id)
  }

  /*public viewprofile()
  {
    this.rs.getdetails(this.email,this.pswd).subscribe(data=>{
      this.userdetails=data;
      })
  }*/

}

 
