import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService} from '../register.service'
import { Users } from '../models/users';
import {Recruiters} from '../models/recruiters'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: Users;
  currentRecruiter:Recruiters;

  constructor(private router: Router,
    private rs: RegisterService) 
    {
        //this.rs.currentUser.subscribe((x)=> this.currentUser = x);
        //this.rs.currentRecruiter.subscribe((x)=> this.currentRecruiter = x);
    }

    logout() 
    {
        this.rs.logout();
        this.router.navigate([""]);
    }
  

  ngOnInit() {
  }

}
