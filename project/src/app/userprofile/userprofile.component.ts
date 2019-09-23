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
  profile: any;

  constructor(
    private rs:RegisterService,
    private rt:Router,
    public route:ActivatedRoute
    ) { }

  public i=null;
  ngOnInit() {

    this.route.params.subscribe(params => {
    this.i = params.id;
    console.log("aaaaaaa : "+this.i);
      
    this.getById(this.i);
        
    });
    
      
  }

  getById(id) {
  this.rs.getProfile(id)
  .subscribe(res => {
  this.profile = res.data;
    if (this.profile.utype === 'jobseeker') {
      document.getElementById("jobseekerdiv").style.display="block";
               
      } else {
        document.getElementById("recruiterdiv").style.display="block";        
      }

      console.log('Profile', this.profile.utype);  
    });
  }

  public editprofile(id)
  {
      console.log("edit user: "+id);
      this.rt.navigateByUrl("/editprofile/"+id)
  }

  public editrecruiter(id)
  {
      console.log("edit recruiter: "+id);
      this.rt.navigateByUrl("/editrecruiter/"+id)
  }

  /*public viewprofile()
  {
    this.rs.getdetails(this.email,this.pswd).subscribe(data=>{
      this.userdetails=data;
      })
  }*/

}

 
