import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from 'src/app/api/models/jobs.model';
import { JobsService } from './jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  public avaliable_jobs: Observable<Job[]> = this._JobsService.getavjobs()
  public displayed_columns: string[]= ['title','description','value']
  constructor(private _JobsService: JobsService) { }

  ngOnInit(): void {
  }

}
