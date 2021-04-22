import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Job, job_process } from 'src/app/api/models/jobs.model';
import { JobService } from 'src/app/api/services/job.service';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private avaliable_jobs = new BehaviorSubject<Job[]>([
    
  ])
  constructor(private _ApiJobService: JobService) {
    //_ApiJobService.getJobs().subscribe(data => this.setavjobs(data))
   }

  public setavjobs(jobs: Job[]): void{
    this.avaliable_jobs.next(jobs)
  }

  public getavjobs(): Observable<Job[]>{
    return this.avaliable_jobs.asObservable()
  }

  public createJob(job: Job){
    this._ApiJobService.createJob(job);
  }

}
