import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { RegisterService } from '../register.service'
import { AlertService } from '../alert.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: any;


  constructor(
    private formBuilder: FormBuilder, private rt: Router, private rs: RegisterService,
    private route: ActivatedRoute, private alertService: AlertService) {
    // redirect to home if already logged in

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = "/userprofile"
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  login() {
    this.submitted = true;

    //console.log(this.email);

    /*this.rs.logincheck(this.email,this.pswd).subscribe(data=>{
      this.logindata=data;
      console.log(this.logindata);
      this.rt.navigateByUrl("/userprofile")*/

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.rs.logincheck(this.f.username.value, this.f.password.value)

      .subscribe(
        resultdata => {

          resultdata = JSON.parse(JSON.stringify(resultdata))
          console.log("ithaanu ", resultdata);
          localStorage.setItem('user', JSON.parse(JSON.stringify(resultdata)).data)
          console.log("item : " + JSON.stringify(JSON.parse(JSON.stringify(resultdata)).data._id));
          const x = JSON.stringify(JSON.parse(JSON.stringify(resultdata)).data._id)
          
          this.rt.navigateByUrl('/userprofile/'+ JSON.parse(x));
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
