import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobCreateComponent } from './components/jobs/job-create/job-create.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { ProfileComponent } from './components/profile/profile.component';
import {  AuthGuardService } from './layout/authguard.service'


const routes: Routes = [
  {
    path: "login-register",
    component: LoginRegisterComponent
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: "jobs",
    component: JobsComponent
  },
  {
    path: "create-job",
    component: JobCreateComponent,
    canActivate: [AuthGuardService]
  },



  {
    path: "**",
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
