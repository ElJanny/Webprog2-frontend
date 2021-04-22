import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/api/models/jobs.model';
import { User } from 'src/app/api/models/user.model';
import { JobService } from 'src/app/api/services/job.service';
import { UserService } from 'src/app/api/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  public jobs: Job[] = []
  public username: string = ""
  public currency: number | undefined = 0

  constructor(private route: Router,
    private _UserService:UserService,
    private _JobService: JobService) { }
  
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    this._UserService.getUser().subscribe(data =>{
      console.log(data)
      this.username = data.username
      this.currency = data.points
      this.jobs = data.current_jobs
    })
  }


  CreateJob(){
    this.route.navigate(['/create-job'])
  }

  DeleteJob(row: number,id:string){
    console.log(row)
    this._JobService.deleteJob(id)
    this._UserService.addValueToUser(row)
    location.reload()
  }
}
