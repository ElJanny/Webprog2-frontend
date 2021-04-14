import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Job } from 'src/app/api/models/jobs.model';
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


  constructor(private _JobsService: JobsService) { }
  
  ngOnInit(): void {
    this._JobsService.getavjobs().subscribe((data)=>{
      this.dataSource.data= data   
     })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }


}
