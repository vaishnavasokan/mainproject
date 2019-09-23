import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service'

@Component({
  selector: 'app-jobvacancy',
  templateUrl: './jobvacancy.component.html',
  styleUrls: ['./jobvacancy.component.css']
})
export class JobvacancyComponent implements OnInit {

  qualifications = [
    {
      "name": "Matriculation"
    },
    {
      "name": "Plus Two"
    },
    {
      "name": "Graduate"
    },
    {
      "name": "Post Graduate"
    },
    {
      "name": "Any"
    },
    {
      "name": "Others(Specify in description)"
    }
  ];

  jobForm: FormGroup;
  jobdetails;
  userId: any;
  constructor(private fb: FormBuilder, private rs: RegisterService) { }

  ngOnInit() {
    this.initForm();

    // fetch from localstorage ==> usedid

    // const x = this.localStorage.get('userId');

    // this.jobForm.patchValue({
    //   postedBy: this.x
    // })
  }

  initForm() {
    this.jobForm = this.fb.group({
      jobtitle: ['', Validators.required],
      jdesc: ['', Validators.required],
      qualification: ['', Validators.required],
      experience: ['', Validators.required],
      openingAvailable: ['', Validators.required],
      salary: ['', Validators.required],
      jlocation: ['', Validators.required],
      postedBy: ['']
    })
  }

  postjob() {
    console.log(this.jobForm.value)

    // const data = {
    //   postedBy : this.userId,
    //   formValue: this.jobForm.value
    // }

    this.rs.addjob(this.jobForm.value).subscribe(data => {
      this.jobdetails = data;
    })
  }

}
