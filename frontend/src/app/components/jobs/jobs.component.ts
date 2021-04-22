import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Job, job_process } from 'src/app/api/models/jobs.model';
import { JobService } from 'src/app/api/services/job.service';
import { UserService } from 'src/app/api/services/user.service';
import { JobsService } from './jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit, AfterViewInit {
  public avaliable_jobs: Job[] = []
  public displayed_columns: string[]= ['title','description','value']
 

  dataSource = new MatTableDataSource<Job>(this.avaliable_jobs);
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private _JobsService: JobService, private _UserService: UserService,private router: Router) { }
  
  ngOnInit(): void {
    this._JobsService.getJobs(job_process.FREE).subscribe((data)=>{
      this.dataSource.data= data   
     })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  selectThing(row: Job){
    this._UserService.addJobToUser(row)
    this.router.navigate(['/profile'])
  }  
 

}
