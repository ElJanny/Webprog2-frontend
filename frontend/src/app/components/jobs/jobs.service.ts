import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Job, job_process } from 'src/app/api/models/jobs.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private avaliable_jobs = new BehaviorSubject<Job[]>([
    {id:1,title:'teszt job',description:'test description',value:5431,process: job_process.FREE},
    {id:2,title:'teszt job',description:'test description',value:5431,process: job_process.FREE},
    {id:3,title:'teszt job',description:'test description',value:5431,process: job_process.FREE},
    {id:4,title:'teszt job',description:'test description',value:5431,process: job_process.FREE},
    {id:5,title:'teszt job',description:'test description',value:5431,process: job_process.FREE},
    {id:6,title:'teszt job',description:'test description',value:5431,process: job_process.FREE},
    {id:7,title:'teszt job',description:'test description',value:5431,process: job_process.FREE},
    {id:8,title:'teszt job',description:'test description',value:5431,process: job_process.FREE},
    {id:9,title:'teszt job',description:'test description',value:5431,process: job_process.FREE},
    {id:10,title:'teszt job',description:'test description',value:5431,process: job_process.FREE},
  ])
  constructor() { }

  public setavjobs(jobs: Job[]): void{
    this.avaliable_jobs.next(jobs)
  }

  public getavjobs(): Observable<Job[]>{
    return this.avaliable_jobs.asObservable()
  }
}
