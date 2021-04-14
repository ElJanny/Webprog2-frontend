import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs/jobs.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { MatmoduleModule } from '../matmodule/matmodule.module';
import { FormsModule } from '@angular/forms';
import { JobCreateComponent } from './jobs/job-create/job-create.component';



@NgModule({
  declarations: [
    LoginRegisterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    JobsComponent,
    JobCreateComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatmoduleModule
  ]
})
export class ComponentModule { }
