import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileUploadModule } from "ng2-file-upload";
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { JobvacancyComponent } from './jobvacancy/jobvacancy.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { RecruitersignupComponent } from './recruitersignup/recruitersignup.component'

import {RegisterService} from './register.service';
import {AlertService} from './alert.service';
import { EditprofileComponent } from './editprofile/editprofile.component'


const approutes:Routes=[
  {path:"", component:HomeComponent},
  {path:"register",component:SignupComponent},
  {path:"recruiterregister",component:RecruitersignupComponent},
  {path:"postjob",component:JobvacancyComponent},
  {path:"userprofile",component:UserprofileComponent},
  {path:"editprofile/:id",component:EditprofileComponent}
];

//children:[{path:"editprofile/:id",component:EditprofileComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    SignupComponent,
    HomeComponent,
    JobvacancyComponent,
    UserprofileComponent,
    RecruitersignupComponent,
    EditprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FileUploadModule,
    RouterModule.forRoot(approutes),
    ReactiveFormsModule
    

  ],
  providers: [RegisterService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
